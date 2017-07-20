import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class ClienteService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Cliente",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				clienteId : 'clienteId',
				nome : 'nome',
				telefoneDeContato : 'telefoneDeContato',
				emailDeContato : 'emailDeContato',
				cpfcnpj : 'cpfcnpj',
				usuarioId : 'usuarioId',

            },
            required: {
				nome : true,
				usuarioId : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Cliente').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.ClienteId != undefined) {
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
