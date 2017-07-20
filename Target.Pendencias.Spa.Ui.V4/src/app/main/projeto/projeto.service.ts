import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { ApiService } from 'app/common/services/api.service';

@Injectable()
export class ProjetoService {


    constructor(private api: ApiService<any>) {


    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Projeto",
            actionDescription: "",
            messageConfirmation: "Deseja relamente executar essa operação?",
            filterResult: [],
            modelFilter: [],
            createForm: {},
            summary: {},
            model: {},
            labels: {
				projetoId : 'projetoId',
				nome : 'nome',
				descricao : 'descricao',
				visao : 'visao',
				clienteId : 'clienteId',
				usuarioId : 'usuarioId',
				chaveUnica : 'chaveUnica',
				inicio : 'inicio',
				fim : 'fim',

            },
            required: {
				nome : true,
				descricao : true,
				clienteId : true,
				usuarioId : true,
				chaveUnica : true,

			},
            isValid : true
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Projeto').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.ProjetoId != undefined) {
            return this.api.setResource('Projeto').put(model);
        }

        return this.api.setResource('Projeto').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Projeto').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
