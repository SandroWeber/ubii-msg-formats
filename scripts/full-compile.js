const childProcess = require('child_process');
const path = require('path');

let pythonExecutable = 'python3';

let compileProtoPython = () => {
  return new Promise((resolve, reject) => {
    // compile .proto via python
    let pathProtoCompile = path.join(__dirname, 'proto-compile.py');
    console.info(pathProtoCompile);
    let processPythonProtoCompile = childProcess.spawn(pythonExecutable, [pathProtoCompile]);

    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    processPythonProtoCompile.stdout.on('data', function (data) {
      console.info(data.toString());
    });

    processPythonProtoCompile.on('close', (code) => {
      console.log(`python .proto compile process close all stdio with code ${code}`);
      if (code === 0) {
        return resolve(code);
      } else {
        return reject(code);
      }
    });
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
      console.error(err);

      if (code === 0) {
        return resolve();
      }
    });
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
      console.error(err);

      if (code === 0) {
        return resolve();
      }
    });
  });
};

(async function () {
  try {
    // compile .proto files via python
    await compileProtoPython();

    // compile protobuf.js
    await compileProtobufJS();

    // compile constants
    await compileConstants();
  } catch (error) {
    console.error(error);
  }
})();
