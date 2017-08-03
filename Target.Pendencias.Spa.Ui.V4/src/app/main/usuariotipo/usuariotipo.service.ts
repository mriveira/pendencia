import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class UsuarioTipoService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            usuarioTipoId : new FormControl(),
            nome : new FormControl(),

        });

    }

    initVM(): ViewModel {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " UsuarioTipo",
            actionDescription: "",
            downloadUri: GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
			details: {},
            infos: this.getInfos(),
            grid: super.getInfoGrid(this.getInfos()),
            form: this._form
        });
    }

	getInfos() {
		return {
				usuarioTipoId: { label: 'usuarioTipoId', type: 'int', isKey: true, list:false },
				nome: { label: 'nome', type: 'string', isKey: false, list:true },

        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('UsuarioTipo').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.usuarioTipoId != undefined) {
            return this.api.setResource('UsuarioTipo').put(model);
        }

        return this.api.setResource('UsuarioTipo').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('UsuarioTipo').delete(model);

    }

}
