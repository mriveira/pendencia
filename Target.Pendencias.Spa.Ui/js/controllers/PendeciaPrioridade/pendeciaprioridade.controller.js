
function PendeciaPrioridadeControllerBase(vm, Crud, $stateParams, $location, $timeout, PendeciaPrioridadeConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "PendeciaPrioridade",
        Create: {
            pathModal: "view/PendeciaPrioridade/modalCreate.html",
        },
        Edit: {
            pathModal: "view/PendeciaPrioridade/modalEdit.html",
        },
		Details: {
            pathModal: "view/PendeciaPrioridade/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = PendeciaPrioridadeConstants.ActionTitle;
	vm.ActionDescription = PendeciaPrioridadeConstants.ActionDescription;
	vm.Labels = PendeciaPrioridadeConstants.Labels;	
	vm.Attributes = PendeciaPrioridadeConstants.Attributes;	

};