
function ClienteControllerBase(vm, Crud, $stateParams, $location, $timeout, ClienteConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "Cliente",
        Create: {
            pathModal: "view/Cliente/modalCreate.html",
        },
        Edit: {
            pathModal: "view/Cliente/modalEdit.html",
        },
		Details: {
            pathModal: "view/Cliente/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = ClienteConstants.ActionTitle;
	vm.ActionDescription = ClienteConstants.ActionDescription;
	vm.Labels = ClienteConstants.Labels;	
	vm.Attributes = ClienteConstants.Attributes;	

};