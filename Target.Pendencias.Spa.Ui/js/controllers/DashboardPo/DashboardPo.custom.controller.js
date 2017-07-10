(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("DashboardPoController", DashboardPoController);

    DashboardPoController.$inject = ['Crud', 'ProjetoConstants', '$uibModal', 'Notification', '$stateParams', '$location', '$timeout', 'Api', 'endpoints', 'Cache']

    function DashboardPoController(Crud, ProjetoConstants, $uibModal, Notification, $stateParams, $location, $timeout, Api, endpoints, Cache) {


        var vm = this;
        vm.ActionTitle = "Dashboard do PO";
        vm.ActionDescription = "...";
        vm.mostrarFiltros = false;
        vm.crud = {};
        vm.projetos = {};

        _ObterProjetos();

        function _ObterProjetos(filter) {

            var apiPendencia = new Api.resourse("Projeto");
            apiPendencia.Filter = filter || {};
            apiPendencia.EnableLoading = false;
            apiPendencia.SuccessHandle = function (data) {

                vm.projetos.dataList = data.dataList;
                
            };

            apiPendencia.GetDataListCustom();
        }
       


    };
})();