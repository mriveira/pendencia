(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("MainController", MainController);

    MainController.$inject = ['$state', '$timeout', '$location', 'AccountService']

    function MainController($state, $timeout, $location, AccountService) {

        var vm = this;
        vm.randomDefault = Math.random();

        AccountService.processTokenCallback();

        vm.Logout = function () {
            AccountService.logout();
        };

		vm.HideShowMenu = function () {

		};

        vm.LoadMenu = function () {

            AccountService.menu(function (result) {

                if (result.data != null)
                {
                    if (result.data.name != null) {
                        vm.userName = result.data.name
                    }

                    if (result.data.role != null) {
                        vm.userRole = result.data.typerole
                    }

                    if (result.data.tools != null) {
                        vm.menu = JSON.parse(result.data.tools)
                    }

                    vm.userInfo = "Usuário logado: " + vm.userName + " [" + vm.userRole + "]"
                }
            });
        };

    };
})();