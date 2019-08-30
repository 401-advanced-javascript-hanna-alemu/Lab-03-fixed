'use strict';

const fsextra = require('fs-extra');

class FileManagerP {

  getFileP( filePath ) {
    return fsextra.readJSON( filePath );
  }

  editFileP( filePath, edits ){
    return fsextra.writeJSON( filePath, edits );
  }

  
  getFilePromises(filePath){
    //returns a promise
    return fsextra.readFile(filePath);
  }

  editFilePromises(filePath, edits){
    //returns a promise
    return fsextra.writeFile(filePath, edits );
  }

}

module.exports = FileManagerP;
