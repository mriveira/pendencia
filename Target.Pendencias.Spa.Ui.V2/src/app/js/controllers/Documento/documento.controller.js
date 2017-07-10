
function DocumentoControllerBase(vm, Crud, $stateParams, $location, $timeout, DocumentoConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "Documento",
        Create: {
            pathModal: "view/Documento/modalCreate.html",
        },
        Edit: {
            pathModal: "view/Documento/modalEdit.html",
        },
		Details: {
            pathModal: "view/Documento/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = DocumentoConstants.ActionTitle;
	vm.ActionDescription = DocumentoConstants.ActionDescription;
	vm.Labels = DocumentoConstants.Labels;	
	vm.Attributes = DocumentoConstants.Attributes;	

};