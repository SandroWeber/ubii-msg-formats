const fs = require('fs');
const path = require('path');

const protobuf = require('protobufjs');
const MessageTranslator = require('./messageTranslator');

class TranslatorsManager {
    constructor() {
        this.extension = '.proto';
        this.protobufDirectory = path.normalize(__dirname + '../../../proto');

        this.translators = new Map();
        let files = this.getFilesSync(this.protobufDirectory, this.extension);
        files.forEach((filePath) => {
            let protoRoot = protobuf.loadSync(filePath);

            let nestedType = protoRoot.nestedArray[0];
            let typePath = '';
            while (nestedType.nested) {
                typePath += nestedType.name + '.';
                nestedType = nestedType.nestedArray[0];
            }
            typePath += nestedType.name;

            this.translators.set(typePath, new MessageTranslator(filePath, typePath));
        });
    }

    getFilesSync(dir, filter) {
        if (!fs.existsSync(dir)) {
            console.log("no directory ", dir);
            return;
        }

        let files = [];
        let list = fs.readdirSync(dir);
        for (let i = 0; i < list.length; i++) {
            let newPath = path.join(dir, list[i]);
            let stat = fs.lstatSync(newPath);
            if (stat.isDirectory()) {
                this.getFilesSync(newPath, filter).forEach((file) => {
                    files.push(file);
                });
            }
            else if (newPath.indexOf(filter) >= 0) {
                files.push(newPath);
            }
        }

        return files;
    };
}

module.exports.default = new TranslatorsManager();