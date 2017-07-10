
function PendenciaEventosControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaEventosConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "PendenciaEventos",
        Create: {
            pathModal: "view/PendenciaEventos/modalCreate.html",
        },
        Edit: {
            pathModal: "view/PendenciaEventos/modalEdit.html",
        },
		Details: {
            pathModal: "view/PendenciaEventos/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = PendenciaEventosConstants.ActionTitle;
	vm.ActionDescription = PendenciaEventosConstants.ActionDescription;
	vm.Labels = PendenciaEventosConstants.Labels;	
	vm.Attributes = PendenciaEventosConstants.Attributes;	

};