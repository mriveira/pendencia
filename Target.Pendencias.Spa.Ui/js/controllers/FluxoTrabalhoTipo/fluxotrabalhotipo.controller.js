
function FluxoTrabalhoTipoControllerBase(vm, Crud, $stateParams, $location, $timeout, FluxoTrabalhoTipoConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "FluxoTrabalhoTipo",
        Create: {
            pathModal: "view/FluxoTrabalhoTipo/modalCreate.html",
        },
        Edit: {
            pathModal: "view/FluxoTrabalhoTipo/modalEdit.html",
        },
		Details: {
            pathModal: "view/FluxoTrabalhoTipo/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = FluxoTrabalhoTipoConstants.ActionTitle;
	vm.ActionDescription = FluxoTrabalhoTipoConstants.ActionDescription;
	vm.Labels = FluxoTrabalhoTipoConstants.Labels;	
	vm.Attributes = FluxoTrabalhoTipoConstants.Attributes;	

};