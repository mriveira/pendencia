import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class ClienteService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            clienteId : new FormControl(),
            nome : new FormControl(),
            telefoneDeContato : new FormControl(),
            emailDeContato : new FormControl(),
            cpfcnpj : new FormControl(),
            usuarioId : new FormControl(),

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
				clienteId: { label: 'clienteId', type: 'int', isKey: true, list:false },
				nome: { label: 'nome', type: 'string', isKey: false, list:false },
				telefoneDeContato: { label: 'telefoneDeContato', type: 'string', isKey: false, list:false },
				emailDeContato: { label: 'emailDeContato', type: 'string', isKey: false, list:false },
				cpfcnpj: { label: 'cpfcnpj', type: 'string', isKey: false, list:false },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:false },

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

}
