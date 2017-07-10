
function PendenciaTipoControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaTipoConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "PendenciaTipo",
        Create: {
            pathModal: "view/PendenciaTipo/modalCreate.html",
        },
        Edit: {
            pathModal: "view/PendenciaTipo/modalEdit.html",
        },
		Details: {
            pathModal: "view/PendenciaTipo/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = PendenciaTipoConstants.ActionTitle;
	vm.ActionDescription = PendenciaTipoConstants.ActionDescription;
	vm.Labels = PendenciaTipoConstants.Labels;	
	vm.Attributes = PendenciaTipoConstants.Attributes;	

};