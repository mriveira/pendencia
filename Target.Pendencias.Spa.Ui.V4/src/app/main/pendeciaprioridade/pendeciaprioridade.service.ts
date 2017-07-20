import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class PendeciaPrioridadeService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "PendeciaPrioridade",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				pendeciaPrioridadeId : 'pendeciaPrioridadeId',
				nome : 'nome',

            },
            required: {
				nome : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('PendeciaPrioridade').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendeciaPrioridadeId != undefined) {
            return this.api.setResource('PendeciaPrioridade').put(model);
        }

        return this.api.setResource('PendeciaPrioridade').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('PendeciaPrioridade').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
