(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("AcompanhadoresController", AcompanhadoresController);

    AcompanhadoresController.$inject = ['Crud', 'AcompanhadoresConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function AcompanhadoresController(Crud, AcompanhadoresConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        AcompanhadoresControllerBase(vm, Crud, $stateParams, $location, $timeout, AcompanhadoresConstants, Notification, Api, $filter, {
            Labels: AcompanhadoresConstants.Labels,
            Attributes: AcompanhadoresConstants.Attributes,
			 Create: {
                urlRedirect:"/Acompanhadores"
            },
            Edit: {
                urlRedirect:"/Acompanhadores"
            },
        });

    };
})();