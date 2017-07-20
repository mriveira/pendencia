import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class ProjetoFluxoTrabalhoStatusService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "ProjetoFluxoTrabalhoStatus",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				projetoId : 'projetoId',
				fluxoTrabalhoStatusId : 'fluxoTrabalhoStatusId',

            },
            required: {
				projetoId : true,
				fluxoTrabalhoStatusId : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('ProjetoFluxoTrabalhoStatus').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.ProjetoId != undefined) {
            return this.api.setResource('ProjetoFluxoTrabalhoStatus').put(model);
        }

        return this.api.setResource('ProjetoFluxoTrabalhoStatus').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('ProjetoFluxoTrabalhoStatus').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
