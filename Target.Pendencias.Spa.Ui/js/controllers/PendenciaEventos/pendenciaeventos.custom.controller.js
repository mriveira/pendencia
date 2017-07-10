(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("PendenciaEventosController", PendenciaEventosController);

    PendenciaEventosController.$inject = ['Crud', 'PendenciaEventosConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function PendenciaEventosController(Crud, PendenciaEventosConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        PendenciaEventosControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaEventosConstants, Notification, Api, $filter, {
            Labels: PendenciaEventosConstants.Labels,
            Attributes: PendenciaEventosConstants.Attributes,
			 Create: {
                urlRedirect:"/PendenciaEventos"
            },
            Edit: {
                urlRedirect:"/PendenciaEventos"
            },
        });

    };
})();