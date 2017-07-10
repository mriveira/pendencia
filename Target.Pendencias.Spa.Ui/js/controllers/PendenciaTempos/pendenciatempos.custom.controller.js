(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("PendenciaTemposController", PendenciaTemposController);

    PendenciaTemposController.$inject = ['Crud', 'PendenciaTemposConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function PendenciaTemposController(Crud, PendenciaTemposConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        PendenciaTemposControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaTemposConstants, Notification, Api, $filter, {
            Labels: PendenciaTemposConstants.Labels,
            Attributes: PendenciaTemposConstants.Attributes,
			 Create: {
                urlRedirect:"/PendenciaTempos"
            },
            Edit: {
                urlRedirect:"/PendenciaTempos"
            },
        });

    };
})();