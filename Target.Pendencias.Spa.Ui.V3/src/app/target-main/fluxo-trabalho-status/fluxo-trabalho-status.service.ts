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
