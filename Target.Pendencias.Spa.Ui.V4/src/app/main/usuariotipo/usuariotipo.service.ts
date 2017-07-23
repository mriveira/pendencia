import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class UsuarioTipoService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            nome : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "UsuarioTipo",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
            infos: this.getInfos(),
            grid: this.infosToArray(),
			form: this._form
        };

    }

	infosToArray() {

        var list = [];
        for (let key in this.getInfos()) {
            list.push(this.getInfos()[key])
        }
        return list;
    }

	getInfos() {
        return {
           				nome: { label: 'nome', type: 'string', isKey: false },
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

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
