import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class UsuarioServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nome : new FormControl(),
            foto : new FormControl(),
            email : new FormControl(),
            senha : new FormControl(),
			confSenha: new FormControl(),
            usuarioId : new FormControl(),
            usuarioTipoId : new FormControl(),
            usuarioDonoId : new FormControl(),
            ativo : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			nome: { label: 'nome', type: 'string', isKey: false, list:true   },
			foto: { label: 'foto', type: 'string', isKey: false, list:false   },
			email: { label: 'email', type: 'string', isKey: false, list:true   },
			senha: { label: 'senha', type: 'changevalue', isKey: false, list:true  , aux : '******' },
			confSenha: new FormControl(),
			usuarioId: { label: 'usuarioId', type: 'int', isKey: true, list:false   },
			usuarioTipoId: { label: 'usuarioTipoId', type: 'int', isKey: false, list:false   },
			usuarioDonoId: { label: 'usuarioDonoId', type: 'int?', isKey: false, list:false   },
			ativo: { label: 'ativo', type: 'bool', isKey: false, list:true   },

        });
		return defaultInfosFields;
    }

}
