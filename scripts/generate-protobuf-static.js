const fs = require('fs');
const path = require('path');

const pbjs = require('protobufjs/cli/pbjs');
const pbts = require('protobufjs/cli/pbts');

(function () {
  let getFilesSync = (dir, filter) => {
    if (!fs.existsSync(dir)) {
      console.log('no directory ', dir);
      return;
    }

    let files = [];
    let list = fs.readdirSync(dir);
    for (let i = 0; i < list.length; i++) {
      let newPath = path.join(dir, list[i]);
      let stat = fs.lstatSync(newPath);
      if (stat.isDirectory()) {
        getFilesSync(newPath, filter).forEach((file) => {
          files.push(file);
        });
      } else if (newPath.indexOf(filter) >= 0) {
        files.push(newPath);
      }
    }

    return files;
  };

  let generateCode = (protobufDirectory, compileTsDefinitions = true) => {
    let jsOutputFile = path.resolve(__dirname + '/../proto_compile/js/protobuf.js');
    let params = ['--target', 'static-module', '--wrap', 'commonjs', '--out', jsOutputFile];
    let files = getFilesSync(protobufDirectory, '.proto');
    params.push(...files);

    pbjs.main(params, function (err, output) {
      if (err) throw err;
      // do something with output
    });
    console.info('protobuf.js compiled');

    if(!compileTsDefinitions) {
      return;
    }

    let tsDefinitionFile = path.resolve(__dirname + '/../proto_compile/js/protobuf.d.ts');
    pbts.main(['-o', tsDefinitionFile, jsOutputFile], function (err, output) {
      if(err) throw err;
      // do something with output
    });
    console.info('protobuf.d.ts compiled');

  };

  let protobufDirectory = path.normalize(__dirname + '/../src/proto');
  generateCode(protobufDirectory);
})();
