import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class ComentarioService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Comentario",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				comentarioId : 'comentarioId',
				descricao : 'descricao',
				data : 'data',
				usuarioId : 'usuarioId',
				pendenciaId : 'pendenciaId',

            },
            required: {
				descricao : true,
				data : true,
				usuarioId : true,
				pendenciaId : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Comentario').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.ComentarioId != undefined) {
            return this.api.setResource('Comentario').put(model);
        }

        return this.api.setResource('Comentario').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Comentario').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
