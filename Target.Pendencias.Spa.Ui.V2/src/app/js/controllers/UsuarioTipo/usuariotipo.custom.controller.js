(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("UsuarioTipoController", UsuarioTipoController);

    UsuarioTipoController.$inject = ['Crud', 'UsuarioTipoConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function UsuarioTipoController(Crud, UsuarioTipoConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        UsuarioTipoControllerBase(vm, Crud, $stateParams, $location, $timeout, UsuarioTipoConstants, Notification, Api, $filter, {
            Labels: UsuarioTipoConstants.Labels,
            Attributes: UsuarioTipoConstants.Attributes,
			 Create: {
                urlRedirect:"/UsuarioTipo"
            },
            Edit: {
                urlRedirect:"/UsuarioTipo"
            },
        });

    };
})();