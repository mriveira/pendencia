import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class FluxoTrabalhoStatusService {



    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return {
            mostrarFiltros: false,
            actionTitle: "FluxoTrabalhoStatus",
            actionDescription: "",
            messageConfirmation : "Deseja relamente executar essa operação?", 
            filterResult: [],
            modelFilter: [],
            summary : {},
            model: {},
            labels: {
                fluxoTrabalhoStatusId: 'fluxoTrabalhoStatusId',
                nome: 'nome',
                fluxoTrabalhoTipoId: 'fluxoTrabalhoTipoId',
                corFundo: 'corFundo',
                corFonte: 'corFonte',
                ordem: 'ordem'
            }
        };
    }

    pagingConfig(modelFilter,pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('FluxoTrabalhoStatus').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.fluxoTrabalhoStatusId != undefined) {
            return this.api.setResource('FluxoTrabalhoStatus').put(model);
        }

        return this.api.setResource('FluxoTrabalhoStatus').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('FluxoTrabalhoStatus').delete(model);

    }

}
