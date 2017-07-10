
function ComentarioControllerBase(vm, Crud, $stateParams, $location, $timeout, ComentarioConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "Comentario",
        Create: {
            pathModal: "view/Comentario/modalCreate.html",
        },
        Edit: {
            pathModal: "view/Comentario/modalEdit.html",
        },
		Details: {
            pathModal: "view/Comentario/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = ComentarioConstants.ActionTitle;
	vm.ActionDescription = ComentarioConstants.ActionDescription;
	vm.Labels = ComentarioConstants.Labels;	
	vm.Attributes = ComentarioConstants.Attributes;	

};