import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class ClienteServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nome : new FormControl(),
            telefoneDeContato : new FormControl(),
            emailDeContato : new FormControl(),
            cpfcnpj : new FormControl(),
            clienteId : new FormControl(),
            usuarioId : new FormControl(),

        });
		return new FormGroup(formControls);
	}

	getInfosFields() {
		return {
			nome: { label: 'nome', type: 'string', isKey: false, list:true   },
			telefoneDeContato: { label: 'telefoneDeContato', type: 'string', isKey: false, list:true   },
			emailDeContato: { label: 'emailDeContato', type: 'string', isKey: false, list:true   },
			cpfcnpj: { label: 'cpfcnpj', type: 'string', isKey: false, list:true   },
			clienteId: { label: 'clienteId', type: 'int', isKey: true, list:false   },
			usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:false   },

        }
    }



}
