'use strict';

const fse = require('fs-extra');

class FileManager {

  getFile( filePath, callbackFunction ){

    fse.readFile( filePath, ( error, data ) => {
      if ( error ) {
        throw error;
      } else callbackFunction( undefined, JSON.parse( data ) );
    });
  
  }

  editFile ( filePath, data, callbackFunction ){

    fse.writeFile( filePath, JSON.stringify( data ), ( error ) => {
      if ( error ) {
        throw error;
      } else callbackFunction( undefined );
    });

  }

}

module.exports = FileManager;
