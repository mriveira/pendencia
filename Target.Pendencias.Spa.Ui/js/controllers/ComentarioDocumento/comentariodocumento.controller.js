
function ComentarioDocumentoControllerBase(vm, Crud, $stateParams, $location, $timeout, ComentarioDocumentoConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "ComentarioDocumento",
        Create: {
            pathModal: "view/ComentarioDocumento/modalCreate.html",
        },
        Edit: {
            pathModal: "view/ComentarioDocumento/modalEdit.html",
        },
		Details: {
            pathModal: "view/ComentarioDocumento/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = ComentarioDocumentoConstants.ActionTitle;
	vm.ActionDescription = ComentarioDocumentoConstants.ActionDescription;
	vm.Labels = ComentarioDocumentoConstants.Labels;	
	vm.Attributes = ComentarioDocumentoConstants.Attributes;	

};