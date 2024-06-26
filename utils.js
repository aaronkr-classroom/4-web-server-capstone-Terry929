"use strict";

//listing 7.5 (P123)
const fs =require('fs'),
    httpStatus = require('http-status-codes'),
    contentTypes =require('./content-types');

module.exports ={
    getFile: (file,res) => {
        fs.readFile(`./${file}`,(error,data) => {
            if (error){
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html
                    );
                res.end("Error serving content!");
            }
            res.end(data);
        });
    }
}