
function FluxoTrabalhoStatusControllerBase(vm, Crud, $stateParams, $location, $timeout, FluxoTrabalhoStatusConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "FluxoTrabalhoStatus",
        Create: {
            pathModal: "view/FluxoTrabalhoStatus/modalCreate.html",
        },
        Edit: {
            pathModal: "view/FluxoTrabalhoStatus/modalEdit.html",
        },
		Details: {
            pathModal: "view/FluxoTrabalhoStatus/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = FluxoTrabalhoStatusConstants.ActionTitle;
	vm.ActionDescription = FluxoTrabalhoStatusConstants.ActionDescription;
	vm.Labels = FluxoTrabalhoStatusConstants.Labels;	
	vm.Attributes = FluxoTrabalhoStatusConstants.Attributes;	

};