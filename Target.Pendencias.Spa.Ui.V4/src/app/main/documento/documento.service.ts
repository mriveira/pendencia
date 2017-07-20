import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class DocumentoService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Documento",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				documentoId : 'documentoId',
				arquivo : 'arquivo',
				ext : 'ext',

            },
            required: {
				arquivo : true,
				ext : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Documento').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.DocumentoId != undefined) {
            return this.api.setResource('Documento').put(model);
        }

        return this.api.setResource('Documento').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Documento').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
