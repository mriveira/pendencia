import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class ClienteService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            nome : new FormControl(),
            telefoneDeContato : new FormControl(),
            emailDeContato : new FormControl(),
            cpfcnpj : new FormControl(),
            usuarioId : new FormControl(),
        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Cliente",
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
				telefoneDeContato: { label: 'telefoneDeContato', type: 'string', isKey: false },
				emailDeContato: { label: 'emailDeContato', type: 'string', isKey: false },
				cpfcnpj: { label: 'cpfcnpj', type: 'string', isKey: false },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Cliente').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.clienteId != undefined) {
            return this.api.setResource('Cliente').put(model);
        }

        return this.api.setResource('Cliente').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Cliente').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
