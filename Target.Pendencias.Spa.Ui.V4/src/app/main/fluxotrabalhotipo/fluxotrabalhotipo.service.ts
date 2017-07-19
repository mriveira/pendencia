import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class FluxoTrabalhoTipoService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "FluxoTrabalhoTipo",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				fluxoTrabalhoTipoId : 'fluxoTrabalhoTipoId',
				nome : 'nome',

            },
            required: {
				nome : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('FluxoTrabalhoTipo').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.FluxoTrabalhoTipoId != undefined) {
            return this.api.setResource('FluxoTrabalhoTipo').put(model);
        }

        return this.api.setResource('FluxoTrabalhoTipo').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('FluxoTrabalhoTipo').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
