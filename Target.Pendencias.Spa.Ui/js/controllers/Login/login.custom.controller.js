(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("LoginController", LoginController);

    LoginController.$inject = ['Api', '$state', 'AccountService']

    function LoginController(Api, $state, AccountService) {

        var vm = this;
        vm.typeLogin = AccountService.getTypeLogin();

        if (vm.typeLogin == "SSO") {
            vm.typeLogin = AccountService.loginSso();
        }
        else {
            vm.DoLogin = function (model) {
                AccountService.loginResourceOwner(model.Email, model.Password);
            };
        }

    };

})();