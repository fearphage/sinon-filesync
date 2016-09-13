'use strict'

const file = require('fs').readFileSync(
  __dirname + '/file.txt', 'utf8'
);

module.exports = `hello ${file}`;