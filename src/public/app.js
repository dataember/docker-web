
define(['angularAMD', 'angular-route'], function (angularAMD) {
    'use strict';

    var app = angular.module("webapp", ['ngRoute']);
            app.config(function ($routeProvider) {
                        $routeProvider.when("/", angularAMD.route({
                                        templateUrl: 'partial/index.tpl.html', controller: 'IndexCtrl',
                                        controllerUrl: 'controller/indexctrl'
                                                    }));
                            });
        
        return angularAMD.bootstrap(app);
});
