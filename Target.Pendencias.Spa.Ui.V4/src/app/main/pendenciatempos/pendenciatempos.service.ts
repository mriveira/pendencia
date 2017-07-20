import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class PendenciaTemposService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendenciaTempos",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				pendenciaTemposId : 'pendenciaTemposId',
				pendenciaId : 'pendenciaId',
				usuarioId : 'usuarioId',
				inicio : 'inicio',
				fim : 'fim',
				nota : 'nota',

            },
            required: {
				pendenciaId : true,
				usuarioId : true,
				inicio : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaTempos').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendenciaTemposId != undefined) {
            return this.api.setResource('PendenciaTempos').put(model);
        }

        return this.api.setResource('PendenciaTempos').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaTempos').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
