(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("ComentarioDocumentoController", ComentarioDocumentoController);

    ComentarioDocumentoController.$inject = ['Crud', 'ComentarioDocumentoConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function ComentarioDocumentoController(Crud, ComentarioDocumentoConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        ComentarioDocumentoControllerBase(vm, Crud, $stateParams, $location, $timeout, ComentarioDocumentoConstants, Notification, Api, $filter, {
            Labels: ComentarioDocumentoConstants.Labels,
            Attributes: ComentarioDocumentoConstants.Attributes,
			 Create: {
                urlRedirect:"/ComentarioDocumento"
            },
            Edit: {
                urlRedirect:"/ComentarioDocumento"
            },
        });

    };
})();