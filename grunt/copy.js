module.exports = {
    options:{
      process: function(content, srcpath){
          
          switch(srcpath){
            case 'src/public/index.html' :{
                content = content.replace('bootstrap.css','bootstrap.min.css');
                break;
            }
            case 'src/public/main.js' : {
                content = content.replace('lib/jquery/jquery',
                                          'lib/jquery/jquery.min');
                content = content.replace('lib/bootstrap/js/bootstrap',
                                          'lib/bootstrap/js/bootstrap.min');
                content = content.replace('lib/angular/angularjs/angular',
                                          'lib/angular/angularjs/angular.min');
                content = content.replace('lib/angular/angular-route/angular-route',
                                          'lib/angular/angular-route/angular-route.min');
                content = content.replace('lib/angular/angularAMD/angularAMD',
                                          'lib/angular/angularAMD/angularAMD.min');
                break;
            }
            
            case 'src/public/app.js' : {
                    content = content.replace('controller/indexctrl',
                                              'controller/indexctrl.min');
            }
          }
         
         return content;
      }
    },
    dev:{
        files: [
            {
                expand: true, cwd: 'bower_components/angular/',
                src: 'angular.js',
                dest: 'src/public/lib/angular/angularjs/'
            },
            {
                expand: true, cwd: 'bower_components/angular-route/',
                src: 'angular-route.js',
                dest: 'src/public/lib/angular/angular-route/'
            },
            {
                expand: true, cwd: 'bower_components/angularAMD/',
                src: 'angularAMD.js',
                dest: 'src/public/lib/angular/angularAMD/'
            },
            {
                expand: true, cwd: 'bower_components/requirejs/',
                src: 'require.js',
                dest: 'src/public/lib/require/'
            },
            {
                expand: true, cwd: 'bower_components/jquery/dist/',
                src: 'jquery.js',
                dest: 'src/public/lib/jquery/'
            },
            {
                expand: true, cwd: 'bower_components/bootstrap/dist/js',
                src: 'bootstrap.js',
                dest: 'src/public/lib/bootstrap/js'
            },
            {
                expand: true, cwd: 'external/bootstrap-theme',
                src: 'bootstrap.css',
                dest: 'src/public/lib/bootstrap/css'
            },
            {
                expand: true, cwd: 'bower_components/bootstrap/dist/fonts',
                src: '*',
                dest: 'src/public/lib/bootstrap/fonts'
            }
          
        ]
    },
    build:{
        files : [
             {
                expand: true, cwd: 'src/public/',
                src: ['app.js','main.js','index.html'],
                dest: 'build/public/'
             },
             {
                src: './README.md',
                dest: 'build/'
             },
             {
                 src: './package.json',
                 dest: 'build/'
             },
             {
                expand: true, cwd: 'src',
                src: 'server.js',
                dest: 'build/'
             },
             {
                expand: true, cwd: 'src/public/partial',
                src : '*.html',
                dest: 'build/public/partial/'
             },
             {
                expand: true, cwd: 'bower_components/bootstrap/dist/js',
                src: 'bootstrap.min.js',
                dest: 'build/public/lib/bootstrap/js'
             },
             {
                expand: true, cwd: 'external/bootstrap-theme/',
                src: 'bootstrap.min.css',
                dest: 'build/public/lib/bootstrap/css'

             },
             {
                expand: true, cwd: 'bower_components/bootstrap/dist/fonts',
                src: '*',
                dest: 'build/public/lib/bootstrap/fonts'
             },
             {
                expand: true, cwd: 'bower_components/angular/',
                src: 'angular.min.js',
                dest: 'build/public/lib/angular/angularjs/'
             },
             {
                expand: true, cwd: 'bower_components/angular-route/',
                src: 'angular-route.min.js',
                dest: 'build/public/lib/angular/angular-route/'
             },
             {
                expand: true, cwd: 'bower_components/angularAMD/',
                src: 'angularAMD.min.js',
                dest: 'build/public/lib/angular/angularAMD/'
             },
             {
                expand: true, cwd: 'bower_components/requirejs/',
                src: 'require.js',
                dest: 'build/public/lib/require/'
             },
             {
                expand: true, cwd: 'bower_components/jquery/dist/',
                src: 'jquery.min.js',
                dest: 'build/public/lib/jquery/'
             }

             
            ]

    }

}
