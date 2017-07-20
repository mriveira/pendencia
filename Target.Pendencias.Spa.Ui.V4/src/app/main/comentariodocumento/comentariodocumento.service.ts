import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class ComentarioDocumentoService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "ComentarioDocumento",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				documentoId : 'documentoId',
				comentarioId : 'comentarioId',

            },
            required: {
				documentoId : true,
				comentarioId : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('ComentarioDocumento').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.DocumentoId != undefined) {
            return this.api.setResource('ComentarioDocumento').put(model);
        }

        return this.api.setResource('ComentarioDocumento').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('ComentarioDocumento').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}