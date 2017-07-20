import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class ProjetoService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            nome : new FormControl(),
            descricao : new FormControl(),
            visao : new FormControl(),
            clienteId : new FormControl(),
            usuarioId : new FormControl(),
            chaveUnica : new FormControl(),
            inicio : new FormControl(),
            fim : new FormControl(),

        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Projeto",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				projetoId : 'projetoId',
				nome : 'nome',
				descricao : 'descricao',
				visao : 'visao',
				clienteId : 'clienteId',
				usuarioId : 'usuarioId',
				chaveUnica : 'chaveUnica',
				inicio : 'inicio',
				fim : 'fim',

            },
			form: this._form
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Projeto').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.ProjetoId != undefined) {
            return this.api.setResource('Projeto').put(model);
        }

        return this.api.setResource('Projeto').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Projeto').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
