import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class PendenciaTipoService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendenciaTipo",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				pendenciaTipoId : 'pendenciaTipoId',
				nome : 'nome',

            },
            required: {
				nome : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendenciaTipo').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendenciaTipoId != undefined) {
            return this.api.setResource('PendenciaTipo').put(model);
        }

        return this.api.setResource('PendenciaTipo').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendenciaTipo').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
