module.exports = function(grunt){
    'use strict';
    require('load-grunt-config')(grunt);


    grunt.registerTask('default',['copy:dev','jshint','execute']);
    grunt.registerTask('run',['copy:dev','jshint','execute']);
    grunt.registerTask('build',['clean','copy:dev','jshint','uglify','copy:build']);
};
