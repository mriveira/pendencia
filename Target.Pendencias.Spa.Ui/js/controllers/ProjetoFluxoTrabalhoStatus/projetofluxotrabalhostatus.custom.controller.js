(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("ProjetoFluxoTrabalhoStatusController", ProjetoFluxoTrabalhoStatusController);

    ProjetoFluxoTrabalhoStatusController.$inject = ['Crud', 'ProjetoFluxoTrabalhoStatusConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function ProjetoFluxoTrabalhoStatusController(Crud, ProjetoFluxoTrabalhoStatusConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        ProjetoFluxoTrabalhoStatusControllerBase(vm, Crud, $stateParams, $location, $timeout, ProjetoFluxoTrabalhoStatusConstants, Notification, Api, $filter, {
            Labels: ProjetoFluxoTrabalhoStatusConstants.Labels,
            Attributes: ProjetoFluxoTrabalhoStatusConstants.Attributes,
			 Create: {
                urlRedirect:"/ProjetoFluxoTrabalhoStatus"
            },
            Edit: {
                urlRedirect:"/ProjetoFluxoTrabalhoStatus"
            },
        });

    };
})();