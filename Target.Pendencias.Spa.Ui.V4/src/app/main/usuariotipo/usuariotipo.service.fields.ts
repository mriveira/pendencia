import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class UsuarioTipoServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nome : new FormControl(),
            usuarioTipoId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			nome: { label: 'nome', type: 'string', isKey: false, list:true   },
			usuarioTipoId: { label: 'usuarioTipoId', type: 'int', isKey: true, list:false   },

        });
		return defaultInfosFields;
    }

}
