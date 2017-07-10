
function AcompanhadoresControllerBase(vm, Crud, $stateParams, $location, $timeout, AcompanhadoresConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "Acompanhadores",
        Create: {
            pathModal: "view/Acompanhadores/modalCreate.html",
        },
        Edit: {
            pathModal: "view/Acompanhadores/modalEdit.html",
        },
		Details: {
            pathModal: "view/Acompanhadores/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = AcompanhadoresConstants.ActionTitle;
	vm.ActionDescription = AcompanhadoresConstants.ActionDescription;
	vm.Labels = AcompanhadoresConstants.Labels;	
	vm.Attributes = AcompanhadoresConstants.Attributes;	

};