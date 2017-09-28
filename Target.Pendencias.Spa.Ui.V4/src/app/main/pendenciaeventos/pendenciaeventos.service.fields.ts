import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class PendenciaEventosServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            descricao : new FormControl(),
            data : new FormControl(),
            pendenciaEventosId : new FormControl(),
            pendenciaId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			descricao: { label: 'descricao', type: 'string', isKey: false, list:false   },
			data: { label: 'data', type: 'DateTime?', isKey: false, list:true   },
			pendenciaEventosId: { label: 'pendenciaEventosId', type: 'int', isKey: true, list:false   },
			pendenciaId: { label: 'pendenciaId', type: 'int', isKey: false, list:false   },

        });
		return defaultInfosFields;
    }

}
