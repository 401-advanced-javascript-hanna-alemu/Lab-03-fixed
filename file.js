'use strict';

const fs = require('fs');
const fse = require('fs-extra');

class FileManager {

  readFile( filePath, callbackFunction ){

    fse.readFile( filePath, ( error, data ) => {
      if ( error ) {
        throw error;
      } else callbackFunction( undefined, JSON.parse( data.toString() ) );
    });
  
  }

  writeFile ( filePath, data, callbackFunction ){

    fse.writeFile( filePath, JSON.stringify( data ), ( error ) => {
      if ( error ) {
        throw error;
      } else callbackFunction( undefined, data );
    });

  }

  readFilePromises(fileName){
    return fse.readFile(fileName);
}

  writeFilePromises(fileName, data){
      return fse.writeFile(fileName, data);
  }

}

module.exports = FileManager;
