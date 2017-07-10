
function UsuarioTipoControllerBase(vm, Crud, $stateParams, $location, $timeout, UsuarioTipoConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "UsuarioTipo",
        Create: {
            pathModal: "view/UsuarioTipo/modalCreate.html",
        },
        Edit: {
            pathModal: "view/UsuarioTipo/modalEdit.html",
        },
		Details: {
            pathModal: "view/UsuarioTipo/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = UsuarioTipoConstants.ActionTitle;
	vm.ActionDescription = UsuarioTipoConstants.ActionDescription;
	vm.Labels = UsuarioTipoConstants.Labels;	
	vm.Attributes = UsuarioTipoConstants.Attributes;	

};