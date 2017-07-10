
function UsuarioControllerBase(vm, Crud, $stateParams, $location, $timeout, UsuarioConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "Usuario",
        Create: {
            pathModal: "view/Usuario/modalCreate.html",
        },
        Edit: {
            pathModal: "view/Usuario/modalEdit.html",
        },
		Details: {
            pathModal: "view/Usuario/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = UsuarioConstants.ActionTitle;
	vm.ActionDescription = UsuarioConstants.ActionDescription;
	vm.Labels = UsuarioConstants.Labels;	
	vm.Attributes = UsuarioConstants.Attributes;	

};