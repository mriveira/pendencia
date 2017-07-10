(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("DocumentoController", DocumentoController);

    DocumentoController.$inject = ['Crud', 'DocumentoConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function DocumentoController(Crud, DocumentoConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        DocumentoControllerBase(vm, Crud, $stateParams, $location, $timeout, DocumentoConstants, Notification, Api, $filter, {
            Labels: DocumentoConstants.Labels,
            Attributes: DocumentoConstants.Attributes,
			 Create: {
                urlRedirect:"/Documento"
            },
            Edit: {
                urlRedirect:"/Documento"
            },
        });

    };
})();