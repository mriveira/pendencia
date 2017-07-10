
function TagsControllerBase(vm, Crud, $stateParams, $location, $timeout, TagsConstants, Notification, Api, $filter, customConfig) {

    vm.crud = new Crud.start();
	vm.randomDefault = Math.random();
	vm.mostrarFiltros = false;

    vm.crud.Config = {
        resource: "Tags",
        Create: {
            pathModal: "view/Tags/modalCreate.html",
        },
        Edit: {
            pathModal: "view/Tags/modalEdit.html",
        },
		Details: {
            pathModal: "view/Tags/details.html",
        },
    };

    vm.crud.Config = angular.merge({}, customConfig, vm.crud.Config)
    vm.crud.SetViewModel(vm);
	vm.crud.Filter($location.search());
	vm.crud.ConfigInPage($stateParams, vm, Notification, $timeout)

	vm.ActionTitle = TagsConstants.ActionTitle;
	vm.ActionDescription = TagsConstants.ActionDescription;
	vm.Labels = TagsConstants.Labels;	
	vm.Attributes = TagsConstants.Attributes;	

};