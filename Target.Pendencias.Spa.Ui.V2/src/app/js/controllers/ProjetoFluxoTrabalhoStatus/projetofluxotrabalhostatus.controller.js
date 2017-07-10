
function ProjetoFluxoTrabalhoStatusControllerBase(vm, Crud, $stateParams, $location, $timeout, ProjetoFluxoTrabalhoStatusConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "ProjetoFluxoTrabalhoStatus",
        Create: {
            pathModal: "view/ProjetoFluxoTrabalhoStatus/modalCreate.html",
        },
        Edit: {
            pathModal: "view/ProjetoFluxoTrabalhoStatus/modalEdit.html",
        },
		Details: {
            pathModal: "view/ProjetoFluxoTrabalhoStatus/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = ProjetoFluxoTrabalhoStatusConstants.ActionTitle;
	vm.ActionDescription = ProjetoFluxoTrabalhoStatusConstants.ActionDescription;
	vm.Labels = ProjetoFluxoTrabalhoStatusConstants.Labels;	
	vm.Attributes = ProjetoFluxoTrabalhoStatusConstants.Attributes;	

};