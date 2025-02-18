const fs = require('fs');
const path = require('path');
const util = require('util');

const pathDestination = '../proto_compile/';

(function () {
  let pathSourceJSON = path.join(__dirname, '../src/constants.json');
  let pathDistJSON = path.join(__dirname, pathDestination + 'constants.json');
  let constants = JSON.parse(fs.readFileSync(pathSourceJSON));
  let outputJS = 'let constants = ';
  outputJS += util.inspect(constants);
  outputJS += '\n\nmodule.exports = constants;';

  fs.writeFileSync(path.join(__dirname, pathDestination + 'js/constants.js'), outputJS);
  fs.copyFileSync(pathSourceJSON, pathDistJSON);

  console.log('constants.js written and constants.json copied to /dist');
})();
