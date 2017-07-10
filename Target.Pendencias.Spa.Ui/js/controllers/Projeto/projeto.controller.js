
function ProjetoControllerBase(vm, Crud, $stateParams, $location, $timeout, ProjetoConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "Projeto",
        Create: {
            pathModal: "view/Projeto/modalCreate.html",
        },
        Edit: {
            pathModal: "view/Projeto/modalEdit.html",
        },
		Details: {
            pathModal: "view/Projeto/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = ProjetoConstants.ActionTitle;
	vm.ActionDescription = ProjetoConstants.ActionDescription;
	vm.Labels = ProjetoConstants.Labels;	
	vm.Attributes = ProjetoConstants.Attributes;	

};