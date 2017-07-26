import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class UsuarioService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            usuarioId : new FormControl(),
            nome : new FormControl(),
            foto : new FormControl(),
            email : new FormControl(),
            senha : new FormControl(),
            confSenha: new FormControl(),
            usuarioTipoId : new FormControl(),
            ativo : new FormControl(),
            usuarioDonoId : new FormControl(),

        });

    }

    initVM(): ViewModel {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: "Cliente",
            actionDescription: "",
            downloadUri: GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
            infos: this.getInfos(),
            grid: super.getInfoGrid(this.getInfos()),
            form: this._form
        });
    }

	getInfos() {
		return {
				usuarioId: { label: 'usuarioId', type: 'int', isKey: true, list:false },
				nome: { label: 'nome', type: 'string', isKey: false, list:false },
				foto: { label: 'foto', type: 'string', isKey: false, list:true },
				email: { label: 'email', type: 'string', isKey: false, list:false },
				senha: { label: 'senha', type: 'string', isKey: false, list:false },
            confSenha: new FormControl(),
				usuarioTipoId: { label: 'usuarioTipoId', type: 'int', isKey: false, list:false },
				ativo: { label: 'ativo', type: 'bool', isKey: false, list:false },
				usuarioDonoId: { label: 'usuarioDonoId', type: 'int?', isKey: false, list:true },

        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Usuario').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.usuarioId != undefined) {
            return this.api.setResource('Usuario').put(model);
        }

        return this.api.setResource('Usuario').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Usuario').delete(model);

    }

}
