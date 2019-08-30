'use strict';

module.exports = exports = {};

exports.readFile = (filePath, callback) => {
  if( filePath.match(/bad/i) ) {
    callback('Invalid File');
  }
  else {
    callback(undefined, new Buffer('File Contents'));
  }
};
