(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("TagsController", TagsController);

    TagsController.$inject = ['Crud', 'TagsConstants', 'Notification', '$stateParams', '$location', '$timeout', 'Api']

    function TagsController(Crud, TagsConstants, Notification, $stateParams, $location, $timeout, Api, $filter) {

        var vm = this;

        TagsControllerBase(vm, Crud, $stateParams, $location, $timeout, TagsConstants, Notification, Api, $filter, {
            Labels: TagsConstants.Labels,
            Attributes: TagsConstants.Attributes,
			 Create: {
                urlRedirect:"/Tags"
            },
            Edit: {
                urlRedirect:"/Tags"
            },
        });

    };
})();