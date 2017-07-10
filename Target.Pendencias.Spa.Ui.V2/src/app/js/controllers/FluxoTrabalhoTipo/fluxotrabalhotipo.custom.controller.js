(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("FluxoTrabalhoTipoController", FluxoTrabalhoTipoController);

    FluxoTrabalhoTipoController.$inject = ['Crud', 'FluxoTrabalhoTipoConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function FluxoTrabalhoTipoController(Crud, FluxoTrabalhoTipoConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        FluxoTrabalhoTipoControllerBase(vm, Crud, $stateParams, $location, $timeout, FluxoTrabalhoTipoConstants, Notification, Api, $filter, {
            Labels: FluxoTrabalhoTipoConstants.Labels,
            Attributes: FluxoTrabalhoTipoConstants.Attributes,
			 Create: {
                urlRedirect:"/FluxoTrabalhoTipo"
            },
            Edit: {
                urlRedirect:"/FluxoTrabalhoTipo"
            },
        });

    };
})();