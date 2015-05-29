### Setup ###


Install nodejs/npm and make sure node and npm command are in your path.

Install  grunt-cli globally  (as root/administrator):

npm install -g grunt-cli

Install bower globally (as root/administrator):

npm install -g bower

Change into the top-level directory containing package.json and run the commands:

npm install 

bower install

## Grunt ##

To start the file server, whilst in the top level checkout directory type:

    grunt

    or
    
    grunt run

To create a build:

    grunt build

This will create a "build" directory.

To run the build change into the "build" directory and:

    npm install --production

    NODE_ENV=production node server.js

## Server Ports

By default the server will listen on localhost port 8080

To change this set the following environment variables:

    DOCKER_CONTROL_ADDRESS=0.0.0.0 to bind to all interfaces or specify a particular address

    DOCKER_CONTROL_PORT=9001 to listen on a particular port



