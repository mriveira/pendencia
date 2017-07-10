(function () {
    'use strict';
  
    angular
        .module('Target.Services', [
            'ui.bootstrap',
            'common.utils',
            'ui-notification',
			'ngclipboard'
        ]);

    angular
        .module('Target.Config', [
            'ui.router',
            'common.utils',
            'oc.lazyLoad',
        ]);

    angular
        .module('Target.Controllers', [
            'ui.bootstrap',
            'common.utils',
            'ui-notification',
            'ui.mask',
            'ui.utils.masks',
            'ui.bootstrap.datetimepicker',
			'ngFileUpload',
            'ncy-angular-breadcrumb',
			'ui.select',
            'ngSanitize',
			'textAngular'
        ]);

    angular
       .module('Target', [
           'Target.Services',
           'Target.Config',
           'Target.Controllers',
       ]);
    
})();