import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaService {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		this._form = new FormGroup({
            projetoId : new FormControl(),
            resumo : new FormControl(),
            descricao : new FormControl(),
            requisitadoPor : new FormControl(),
            tempoEstimado : new FormControl(),
            pontosEstimados : new FormControl(),
            prazo : new FormControl(),
            usuarioId : new FormControl(),
            pendenciaTipoId : new FormControl(),
            fluxoTrabalhoStatusId : new FormControl(),
            pendenciaPrioridadeId : new FormControl(),
            tags : new FormControl(),
            dataConclusao : new FormControl(),

        });

    }

    initVM() {

        return  {
            mostrarFiltros: false,
            actionTitle: "Pendencia",
            actionDescription: "",
			downloadUri : GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: [],
            summary: {},
            model: {},
            labels: {
				projetoId : 'projetoId',
				pendenciaId : 'pendenciaId',
				resumo : 'resumo',
				descricao : 'descricao',
				requisitadoPor : 'requisitadoPor',
				tempoEstimado : 'tempoEstimado',
				pontosEstimados : 'pontosEstimados',
				prazo : 'prazo',
				usuarioId : 'usuarioId',
				pendenciaTipoId : 'pendenciaTipoId',
				fluxoTrabalhoStatusId : 'fluxoTrabalhoStatusId',
				pendenciaPrioridadeId : 'pendenciaPrioridadeId',
				tags : 'tags',
				dataConclusao : 'dataConclusao',

            },
			form: this._form
        };

    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Pendencia').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.PendenciaId != undefined) {
            return this.api.setResource('Pendencia').put(model);
        }

        return this.api.setResource('Pendencia').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('Pendencia').delete(model);

    }

    pagingConfig(modelFilter, pageConfig) {

        return Object.assign(modelFilter, {
            PageIndex: pageConfig.PageIndex,
            PageSize: pageConfig.PageSize,
            IsPagination: true
        });

    }

}
