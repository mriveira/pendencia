(function () {
    'use strict';

    

    angular
        .module('Target.Config')
        .factory('httpRequestInterceptor', function () {
            return {
                request: function (configs) {
                    var item = localStorage.getItem("TOKEN_AUTH");
                    configs.headers['Authorization'] = "Bearer " + item;
                    return configs;                }
            };
        });

    angular
        .module('Target.Config')
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('httpRequestInterceptor');
        });
    
})();