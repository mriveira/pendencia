(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("PendenciaController", PendenciaController);

    PendenciaController.$inject = ['Crud', 'PendenciaConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function PendenciaController(Crud, PendenciaConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        PendenciaControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaConstants, Notification, Api, $filter, {
            Labels: PendenciaConstants.Labels,
            Attributes: PendenciaConstants.Attributes,
			 Create: {
                urlRedirect:"/Pendencia"
            },
            Edit: {
                urlRedirect:"/Pendencia"
            },
        });

    };
})();