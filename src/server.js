/**
 *  Files will be served from /public directory
 *
 *  Environment Variables:
 *  
 *  Set the address to bind to DOCKER_CONTROL_ADDRESS default is 127.0.0.1
 *  Set the port to bind to DOCKER_CONTROL_PORT default is 8080
 */


var app = function(){
   'use strict';

   var self = this;
   
   var express = require('express');
   var compression = require('compression');

   self.config = {
        server: express(),
        address: '127.0.0.1',
        port: 8080
   };

   self.initialise = function()
   {
        self.config.server.use(compression());
        self.config.server.use(express.static( __dirname + "/public"));    
        
        self.config.address = process.env.DOCKER_CONTROL_ADDRESS || self.config.address;
        self.config.port = process.env.DOCKER_CONTROL_PORT || self.config.port;
   };

   self.start = function()
   {
        console.log("Starting on " + self.config.address + " port " + self.config.port);

        self.config.server.listen(self.config.port, self.config.address, function(err){

            if(err){
                console.log("Error Starting Server");
            }
        });

   };

};


var appInstance = new app();
appInstance.initialise();
appInstance.start();

