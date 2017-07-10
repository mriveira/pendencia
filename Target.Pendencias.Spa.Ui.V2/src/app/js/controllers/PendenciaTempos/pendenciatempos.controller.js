
function PendenciaTemposControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaTemposConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "PendenciaTempos",
        Create: {
            pathModal: "view/PendenciaTempos/modalCreate.html",
        },
        Edit: {
            pathModal: "view/PendenciaTempos/modalEdit.html",
        },
		Details: {
            pathModal: "view/PendenciaTempos/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = PendenciaTemposConstants.ActionTitle;
	vm.ActionDescription = PendenciaTemposConstants.ActionDescription;
	vm.Labels = PendenciaTemposConstants.Labels;	
	vm.Attributes = PendenciaTemposConstants.Attributes;	

};