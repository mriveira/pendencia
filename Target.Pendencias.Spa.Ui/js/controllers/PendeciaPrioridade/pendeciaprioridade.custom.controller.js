(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("PendeciaPrioridadeController", PendeciaPrioridadeController);

    PendeciaPrioridadeController.$inject = ['Crud', 'PendeciaPrioridadeConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function PendeciaPrioridadeController(Crud, PendeciaPrioridadeConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        PendeciaPrioridadeControllerBase(vm, Crud, $stateParams, $location, $timeout, PendeciaPrioridadeConstants, Notification, Api, $filter, {
            Labels: PendeciaPrioridadeConstants.Labels,
            Attributes: PendeciaPrioridadeConstants.Attributes,
			 Create: {
                urlRedirect:"/PendeciaPrioridade"
            },
            Edit: {
                urlRedirect:"/PendeciaPrioridade"
            },
        });

    };
})();