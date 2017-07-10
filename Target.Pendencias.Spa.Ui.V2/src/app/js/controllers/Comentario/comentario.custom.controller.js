(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("ComentarioController", ComentarioController);

    ComentarioController.$inject = ['Crud', 'ComentarioConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function ComentarioController(Crud, ComentarioConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        ComentarioControllerBase(vm, Crud, $stateParams, $location, $timeout, ComentarioConstants, Notification, Api, $filter, {
            Labels: ComentarioConstants.Labels,
            Attributes: ComentarioConstants.Attributes,
			 Create: {
                urlRedirect:"/Comentario"
            },
            Edit: {
                urlRedirect:"/Comentario"
            },
        });

    };
})();