define(['app'], function (app) {
      'use strict';
      app.controller('IndexCtrl',['$log','$scope',function ($log,$scope) {
            $log.debug("IndexCtrl Loaded");

            $scope.message = "Hello from the controller";
        
        }]);
});
