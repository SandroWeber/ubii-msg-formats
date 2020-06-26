const fs = require('fs');
const path = require('path');
const util = require('util');

(function () {
  let pathSourceJSON = path.join(__dirname, '../src/constants.json');
  let pathDistJSON = path.join(__dirname, '../dist/constants.json');
  let constants = JSON.parse(fs.readFileSync(pathSourceJSON));
  let outputJS = 'let constants = ';
  outputJS += util.inspect(constants);
  outputJS += '\n\nmodule.exports = constants;';

  fs.writeFileSync(path.join(__dirname, '../dist/js/constants.js'), outputJS);
  fs.copyFileSync(pathSourceJSON, pathDistJSON);

  console.log('constants.js written and constants.json copied to /dist');
})();
