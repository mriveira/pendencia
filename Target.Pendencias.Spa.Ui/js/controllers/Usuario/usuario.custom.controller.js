(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("UsuarioController", UsuarioController);

    UsuarioController.$inject = ['Crud', 'UsuarioConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api', '$filter', 'endpoints']

    function UsuarioController(Crud, UsuarioConstants, Notification, $stateParams, $location, $timeout, Api, $filter, endpoints) {

        var vm = this;
        vm.uploadUri = endpoints.DEFAULT + "document/download/";

        UsuarioControllerBase(vm, Crud, $stateParams, $location, $timeout, UsuarioConstants, Notification, Api, $filter,  {
            Labels: UsuarioConstants.Labels,
            Attributes: UsuarioConstants.Attributes,
            Create: {
                urlRedirect: "/Usuario"
            },
            Edit: {
                urlRedirect: "/Usuario"
            },
            Upload: {
                CallBackUpload: function (model, result) {
                    console.log(result.data[0], "CallBackUpload")
                    model.foto = result.data[0];
                },
                CallBackDelete: function (model, result) {
                    console.log(result, "CallBackDelete")
                    model.foto = "vazio.png";
                }
            }
           
        });

    };
})();