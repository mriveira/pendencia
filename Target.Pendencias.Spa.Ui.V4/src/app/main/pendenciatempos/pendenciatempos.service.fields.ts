import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class PendenciaTemposServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nota : new FormControl(),
            inicio : new FormControl(),
            fim : new FormControl(),
            pendenciaTemposId : new FormControl(),
            pendenciaId : new FormControl(),
            usuarioId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			nota: { label: 'nota', type: 'string', isKey: false, list:false   },
			inicio: { label: 'inicio', type: 'DateTime', isKey: false, list:true   },
			fim: { label: 'fim', type: 'DateTime?', isKey: false, list:true   },
			pendenciaTemposId: { label: 'pendenciaTemposId', type: 'int', isKey: true, list:false   },
			pendenciaId: { label: 'pendenciaId', type: 'int', isKey: false, list:false   },
			usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:false   },

        });
		return defaultInfosFields;
    }

}
