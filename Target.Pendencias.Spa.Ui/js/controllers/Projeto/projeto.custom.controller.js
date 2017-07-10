(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("ProjetoController", ProjetoController);

    ProjetoController.$inject = ['Crud', 'ProjetoConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function ProjetoController(Crud, ProjetoConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        ProjetoControllerBase(vm, Crud, $stateParams, $location, $timeout, ProjetoConstants, Notification, Api, $filter, {
            Labels: ProjetoConstants.Labels,
            Attributes: ProjetoConstants.Attributes,
			 Create: {
                urlRedirect:"/Projeto"
            },
            Edit: {
                urlRedirect:"/Projeto"
            },
        });

    };
})();