(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("FluxoTrabalhoStatusController", FluxoTrabalhoStatusController);

    FluxoTrabalhoStatusController.$inject = ['Crud', 'FluxoTrabalhoStatusConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function FluxoTrabalhoStatusController(Crud, FluxoTrabalhoStatusConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        FluxoTrabalhoStatusControllerBase(vm, Crud, $stateParams, $location, $timeout, FluxoTrabalhoStatusConstants, Notification, Api, $filter, {
            Labels: FluxoTrabalhoStatusConstants.Labels,
            Attributes: FluxoTrabalhoStatusConstants.Attributes,
			 Create: {
                urlRedirect:"/FluxoTrabalhoStatus"
            },
            Edit: {
                urlRedirect:"/FluxoTrabalhoStatus"
            },
        });

    };
})();