(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("PendenciaController", PendenciaController);

    PendenciaController.$inject = ['Crud', 'PendenciaConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api','$filter']

    function PendenciaController(Crud, PendenciaConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        console.log("PendenciaController")

        PendenciaControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaConstants, Notification, Api, $filter, {
            Labels: PendenciaConstants.Labels,
            Attributes: PendenciaConstants.Attributes,
            Create: {
                urlRedirect: "/Dashboard/Team"
            },
            Edit: {
                urlRedirect: "/Dashboard/Team"
            },
            LoadSelects: {
                dataitem: ["Projeto"],
                CallBack: function (datatiem, vm) {
                    
                    if (vm.Model != null) {
                        if (vm.Model.projetoId != null)
                            vm.selectedProjeto = $filter('filter')(datatiem, { id: vm.Model.projetoId })[0]

                    }
                },
                onSelectCallback: function (item, vm, index) {
                    vm.Model[index] = vm.selectedProjeto.id;
                }
            }
        });

    };
})();