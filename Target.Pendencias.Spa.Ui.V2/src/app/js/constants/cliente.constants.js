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
                userCreateId : 'userCreateId',
                userCreateDate : 'userCreateDate',
                userAlterId : 'userAlterId',
                userAlterDate : 'userAlterDate',
			
			},
			Attributes : {
                clienteId : '',
                nome : '',
                telefoneDeContato : '',
                emailDeContato : '',
                cpfcnpj : '',
                usuarioId : '',
                userCreateId : '',
                userCreateDate : '',
                userAlterId : '',
                userAlterDate : '',
				
			}
        });
})();

