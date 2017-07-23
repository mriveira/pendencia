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
				descricao: { label: 'descricao', type: 'string', isKey: false },
				visao: { label: 'visao', type: 'string', isKey: false },
				clienteId: { label: 'clienteId', type: 'int', isKey: false },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false },
				chaveUnica: { label: 'chaveUnica', type: 'string', isKey: false },
				inicio: { label: 'inicio', type: 'DateTime?', isKey: false },
				fim: { label: 'fim', type: 'DateTime?', isKey: false },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Projeto').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.projetoId != undefined) {
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
