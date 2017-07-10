(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("PendenciaDocumentoController", PendenciaDocumentoController);

    PendenciaDocumentoController.$inject = ['Crud', 'PendenciaDocumentoConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function PendenciaDocumentoController(Crud, PendenciaDocumentoConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        PendenciaDocumentoControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaDocumentoConstants, Notification, Api, $filter, {
            Labels: PendenciaDocumentoConstants.Labels,
            Attributes: PendenciaDocumentoConstants.Attributes,
			 Create: {
                urlRedirect:"/PendenciaDocumento"
            },
            Edit: {
                urlRedirect:"/PendenciaDocumento"
            },
        });

    };
})();