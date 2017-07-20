import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class UsuarioService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            nome : new FormControl(),
            foto : new FormControl(),
            email : new FormControl(),
            senha : new FormControl(),
            usuarioTipoId : new FormControl(),
            ativo : new FormControl(),
            usuarioDonoId : new FormControl(),

        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Usuario",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				usuarioId : 'usuarioId',
				nome : 'nome',
				foto : 'foto',
				email : 'email',
				senha : 'senha',
				usuarioTipoId : 'usuarioTipoId',
				ativo : 'ativo',
				usuarioDonoId : 'usuarioDonoId',

            },
			form: this._form
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Usuario').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.UsuarioId != undefined) {
            return this.api.setResource('Usuario').put(model);
        }

        return this.api.setResource('Usuario').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Usuario').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
