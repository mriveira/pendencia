
function PendenciaControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "Pendencia",
        Create: {
            pathModal: "view/Pendencia/modalCreate.html",
        },
        Edit: {
            pathModal: "view/Pendencia/modalEdit.html",
        },
		Details: {
            pathModal: "view/Pendencia/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = PendenciaConstants.ActionTitle;
	vm.ActionDescription = PendenciaConstants.ActionDescription;
	vm.Labels = PendenciaConstants.Labels;	
	vm.Attributes = PendenciaConstants.Attributes;	

};