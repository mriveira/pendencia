(function () {
    'use strict';

    angular.module("Target.Config")
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'TokenConstants'];

    function routeConfig($stateProvider, $urlRouterProvider, TokenConstants) {

        var _isAuth = TokenConstants.ISAUTH;
     
        $stateProvider
            .state('Login', {
                   url: '/Login',
                   views: {
                       'mainBody': {
                           templateUrl: MakeUrl('view/Login/index.html'),
                           controller: 'LoginController as vm',
                           resolve: {
                               loadPlugin: function ($ocLazyLoad) {
                                   return $ocLazyLoad.load(
                                       [
                                           'js/controllers/Login/login.custom.controller.js'
                                       ]
                                   );
                               }
                           }
                       }
                   }
            })
            .state('template.home', {
                url: '/Home',
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Home/index.html'),
                        controller: 'HomeController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/controllers/Home/home.custom.controller.js',
                                    ]
                                );
                            }
                        }
                    }
                }
            })

            .state('template.Dashboard-Team', {
                url: '/Dashboard/Team',
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/DashboardTeam/index.html'),
                        controller: 'DashboardTeamController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
                                       'js/constants/Pendencia.constants.js',
                                        MakeUrl('js/controllers/DashboardTeam/dashboardTeam.custom.controller.js'),
                                    ]
                                );
                            }
                        }
                    }
                }
            })

            .state('template.Dashboard-PO', {
                url: '/Dashboard/PO',
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/DashboardPo/index.html'),
                        controller: 'DashboardPoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
                                        'js/constants/Projeto.constants.js',
                                        MakeUrl('js/controllers/DashboardPo/DashboardPo.custom.controller.js'),
                                    ]
                                );
                            }
                        }
                    }
                }
            })


       
        $urlRouterProvider.otherwise('/Login');

        function MakeUrl(url, noCache) {
            if (noCache)
                return url;

            return url + '?v=' + Math.random();
        }

    };

})();