const childProcess = require('child_process');
const path = require('path');


let compileProtoPython = () => {
  return new Promise((resolve, reject) => {
    // compile .proto via python
    let protocompilescript = 'proto_compile.py';
    let processPythonProtoCompile = childProcess.spawn(protocompilescript, process.argv.slice(2), {env: process.env});

    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    processPythonProtoCompile.stdout.on('data', function (data) {
      console.info(data.toString());
    });

    processPythonProtoCompile.stderr.on('data', function (data) {
      console.error(data.toString());
    });

    processPythonProtoCompile.on('error', function(err) {
      if (err.code === 'ENOENT') {
        console.error(`${protocompilescript} not found in $PATH for your current python interpreter?`)
      }
      console.error(`Node error when calling ${protocompilescript}: ` + err);
      return reject(err)
    });

    processPythonProtoCompile.on('close', (code) => {
      console.log(`proto-compile process close all stdio with code ${code}`);
      if (code === 0) {
        return resolve(code);
      } else {
        return reject(code);
      }
    });
  }).catch(error => {
    console.error(`Proto Compile Python rejected with error ${error}`)
    console.error(process.env.PATH)
  });
};

let compileProtobufJS = () => {
  return new Promise((resolve, reject) => {
    let pathProtobufJS = path.join(__dirname, 'generate-protobuf-static.js');
    var processProtobufJS = childProcess.fork(pathProtobufJS);

    processProtobufJS.on('error', function (err) {
      console.error(err);
      return reject();
    });

    processProtobufJS.on('exit', function (code) {
      var err = code === 0 ? null : new Error('exit code ' + code);
      if (err) console.error(err);

      if (code === 0) {
        return resolve();
      }
    });
  }).catch(error => {
    console.error(`Static Javascript Compile rejected with error ${error}`)
  });
};

let compileConstants = () => {
  return new Promise((resolve, reject) => {
    let pathConstants = path.join(__dirname, 'compile-constants.js');
    var processConstants = childProcess.fork(pathConstants);

    processConstants.on('error', function (err) {
      console.error(err);
      return reject();
    });

    processConstants.on('exit', function (code) {
      var err = code === 0 ? null : new Error('exit code ' + code);
      if (err) console.error(err);

      if (code === 0) {
        return resolve();
      }
    });
  }).catch(error => {
    console.error(`Constants Compile rejected with error ${error}`)
  });
};

(async function () {
  // compile .proto files via python
  let protoPython = compileProtoPython();
  let protoStatic = compileProtobufJS();
  let protoConstants = compileConstants();

  // compile with python
  await protoPython;
  // compile protobuf.js
  await protoStatic;
  // compile constants
  await protoConstants;
})();
