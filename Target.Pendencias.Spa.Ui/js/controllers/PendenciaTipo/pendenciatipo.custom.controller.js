(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("PendenciaTipoController", PendenciaTipoController);

    PendenciaTipoController.$inject = ['Crud', 'PendenciaTipoConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function PendenciaTipoController(Crud, PendenciaTipoConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        PendenciaTipoControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaTipoConstants, Notification, Api, $filter, {
            Labels: PendenciaTipoConstants.Labels,
            Attributes: PendenciaTipoConstants.Attributes,
			 Create: {
                urlRedirect:"/PendenciaTipo"
            },
            Edit: {
                urlRedirect:"/PendenciaTipo"
            },
        });

    };
})();