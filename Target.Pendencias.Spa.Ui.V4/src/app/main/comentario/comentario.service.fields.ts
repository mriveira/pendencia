import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class ComentarioServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            descricao : new FormControl(),
            data : new FormControl(),
            comentarioId : new FormControl(),
            usuarioId : new FormControl(),
            pendenciaId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			descricao: { label: 'descricao', type: 'string', isKey: false, list:false   },
			data: { label: 'data', type: 'DateTime', isKey: false, list:true   },
			comentarioId: { label: 'comentarioId', type: 'int', isKey: true, list:false   },
			usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:false   },
			pendenciaId: { label: 'pendenciaId', type: 'int', isKey: false, list:false   },

        });
		return defaultInfosFields;
    }

}
