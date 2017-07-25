import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class ProjetoService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            projetoId : new FormControl(),
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
				projetoId: { label: 'projetoId', type: 'int', isKey: true, list:true },
				nome: { label: 'nome', type: 'string', isKey: false, list:true },
				descricao: { label: 'descricao', type: 'string', isKey: false, list:true },
				visao: { label: 'visao', type: 'string', isKey: false, list:true },
				clienteId: { label: 'clienteId', type: 'int', isKey: false, list:true },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:true },
				chaveUnica: { label: 'chaveUnica', type: 'string', isKey: false, list:true },
				inicio: { label: 'inicio', type: 'DateTime?', isKey: false, list:true },
				fim: { label: 'fim', type: 'DateTime?', isKey: false, list:true },
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

}
