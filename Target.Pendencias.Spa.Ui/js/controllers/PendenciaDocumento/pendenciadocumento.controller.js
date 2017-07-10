
function PendenciaDocumentoControllerBase(vm, Crud, $stateParams, $location, $timeout, PendenciaDocumentoConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "PendenciaDocumento",
        Create: {
            pathModal: "view/PendenciaDocumento/modalCreate.html",
        },
        Edit: {
            pathModal: "view/PendenciaDocumento/modalEdit.html",
        },
		Details: {
            pathModal: "view/PendenciaDocumento/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = PendenciaDocumentoConstants.ActionTitle;
	vm.ActionDescription = PendenciaDocumentoConstants.ActionDescription;
	vm.Labels = PendenciaDocumentoConstants.Labels;	
	vm.Attributes = PendenciaDocumentoConstants.Attributes;	

};