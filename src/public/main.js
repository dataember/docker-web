'use strict';

require.config({
        baseUrl: "",    
        paths: {
                    'jquery' : 'lib/jquery/jquery',
                    'bootstrap' : 'lib/bootstrap/js/bootstrap',
                    'angular': 'lib/angular/angularjs/angular',
                    'angular-route': 'lib/angular/angular-route/angular-route',
                    'angularAMD': 'lib/angular/angularAMD/angularAMD'
                                    },
        shim: { 
            'angular': ['jquery','bootstrap'],
            'angularAMD': ['angular'],
            'angular-route': ['angular'],
            'bootstrap' : {
                'deps' : ['jquery']
            }
        },
        deps: ['app']
});
