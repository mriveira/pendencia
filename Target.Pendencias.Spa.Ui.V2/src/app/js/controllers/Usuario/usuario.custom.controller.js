(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("UsuarioController", UsuarioController);

    UsuarioController.$inject = ['Crud', 'UsuarioConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function UsuarioController(Crud, UsuarioConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        UsuarioControllerBase(vm, Crud, $stateParams, $location, $timeout, UsuarioConstants, Notification, Api, $filter, {
            Labels: UsuarioConstants.Labels,
            Attributes: UsuarioConstants.Attributes,
			 Create: {
                urlRedirect:"/Usuario"
            },
            Edit: {
                urlRedirect:"/Usuario"
            },
        });

    };
})();