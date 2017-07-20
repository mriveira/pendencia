import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class PendenciaEventosService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendenciaEventos",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				pendenciaEventosId : 'pendenciaEventosId',
				pendenciaId : 'pendenciaId',
				descricao : 'descricao',
				data : 'data',

            },
            required: {
				pendenciaId : true,
				descricao : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaEventos').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendenciaEventosId != undefined) {
            return this.api.setResource('PendenciaEventos').put(model);
        }

        return this.api.setResource('PendenciaEventos').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaEventos').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
