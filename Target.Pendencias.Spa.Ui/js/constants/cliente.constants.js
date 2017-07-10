(function () {
    'use strict';

    angular
        .module("Target.Config")
        .constant("ClienteConstants", {

			ActionTitle : "Cliente",
			ActionDescription : "",

			Labels : {
                clienteId : 'clienteId',
                nome : 'nome',
                telefoneDeContato : 'telefoneDeContato',
                emailDeContato : 'emailDeContato',
                cpfcnpj : 'cpfcnpj',
                usuarioId : 'usuarioId',
			
			},
			Attributes : {
                clienteId : '',
                nome : '',
                telefoneDeContato: 'ui-br-phone-number',
                emailDeContato : '',
                cpfcnpj: 'ui-br-cpfcnpj-mask',
                usuarioId : '',
				
			}
        });
})();

