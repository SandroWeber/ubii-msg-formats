const fs = require('fs');
const path = require('path');
const MessageTranslator = require('./messageTranslator');

class ProtobufTranslators {
  constructor() {
    console.info(__dirname);
    let protobufDirectory = path.normalize(__dirname + '../../../proto');
    console.info(protobufDirectory);

    console.info(this.getFilesSync(protobufDirectory, '.proto'));
  }

  getTranslator(messageType) {
    return this[messageType];
  }

  getFilesSync(dir, filter) {
    if (!fs.existsSync(dir)){
      console.log("no directory ", dir);
      return;
    }

    let files = [];
    let list = fs.readdirSync(dir);
    for (let i=0; i<list.length; i++) {
      let newPath = path.join(dir, list[i]);
      let stat = fs.lstatSync(newPath);
      if (stat.isDirectory()){
        this.getFilesSync(newPath, filter).forEach((file) => {
          files.push(file);
        });
      }
      else if (newPath.indexOf(filter)>=0) {
        //console.log('-- found: ',newPath);
        files.push(newPath);
      }
    }

    return files;
  };
}

module.exports.default = new ProtobufTranslators();