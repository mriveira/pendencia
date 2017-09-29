import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class ProjetoDocumentoServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            projetoId : new FormControl(),
            documentoId : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			projetoId: { label: 'projetoId', type: 'int', isKey: true, list:false   },
			documentoId: { label: 'documentoId', type: 'int', isKey: true, list:false   },

        });
		return defaultInfosFields;
    }

}
