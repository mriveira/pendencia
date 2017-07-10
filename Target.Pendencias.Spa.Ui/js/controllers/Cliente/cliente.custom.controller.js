(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("ClienteController", ClienteController);

    ClienteController.$inject = ['Crud', 'ClienteConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function ClienteController(Crud, ClienteConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        ClienteControllerBase(vm, Crud, $stateParams, $location, $timeout, ClienteConstants, Notification, Api, $filter, {
            Labels: ClienteConstants.Labels,
            Attributes: ClienteConstants.Attributes,
			 Create: {
                urlRedirect:"/Cliente"
            },
            Edit: {
                urlRedirect:"/Cliente"
            },
        });

    };
})();