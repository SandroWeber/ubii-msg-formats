const fs = require('fs');
const path = require('path');
const util = require('util');

(function() {
  let constants = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/constants.json')));
  let output = 'let constants = ';
  output += util.inspect(constants);
  output += '\n\nmodule.exports = constants;';

  fs.writeFileSync(path.join(__dirname, '../dist/js/constants.js'), output);
})();
