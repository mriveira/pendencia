import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class AcompanhadoresServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            pendenciaId : new FormControl(),
            usuarioId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			pendenciaId: { label: 'pendenciaId', type: 'int', isKey: true, list:false   },
			usuarioId: { label: 'usuarioId', type: 'int', isKey: true, list:false   },

        });
		return defaultInfosFields;
    }

}
