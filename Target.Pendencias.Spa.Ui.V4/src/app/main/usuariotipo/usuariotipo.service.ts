import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class UsuarioTipoService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "UsuarioTipo",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				usuarioTipoId : 'usuarioTipoId',
				nome : 'nome',

            },
            required: {
				nome : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('UsuarioTipo').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.UsuarioTipoId != undefined) {
            return this.api.setResource('UsuarioTipo').put(model);
        }

        return this.api.setResource('UsuarioTipo').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('UsuarioTipo').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
