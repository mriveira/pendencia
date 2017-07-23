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
            modelFilter: {},
            summary: {},
            model: {},
            infos: this.getInfos(),
            grid: this.infosToArray(),
			form: this._form
        };

    }

	infosToArray() {

        var list = [];
        for (let key in this.getInfos()) {
            list.push(this.getInfos()[key])
        }
        return list;
    }

	getInfos() {
        return {
           				projetoId: { label: 'projetoId', type: 'int', isKey: false },
				resumo: { label: 'resumo', type: 'string', isKey: false },
				descricao: { label: 'descricao', type: 'string', isKey: false },
				requisitadoPor: { label: 'requisitadoPor', type: 'string', isKey: false },
				tempoEstimado: { label: 'tempoEstimado', type: 'int?', isKey: false },
				pontosEstimados: { label: 'pontosEstimados', type: 'int?', isKey: false },
				prazo: { label: 'prazo', type: 'DateTime?', isKey: false },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false },
				pendenciaTipoId: { label: 'pendenciaTipoId', type: 'int', isKey: false },
				fluxoTrabalhoStatusId: { label: 'fluxoTrabalhoStatusId', type: 'int', isKey: false },
				pendenciaPrioridadeId: { label: 'pendenciaPrioridadeId', type: 'int', isKey: false },
				tags: { label: 'tags', type: 'string', isKey: false },
				dataConclusao: { label: 'dataConclusao', type: 'DateTime?', isKey: false },
        }
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Pendencia').get(filters);
    }

    save(model: any): Observable<any> {

        if ( model.pendenciaId != undefined) {
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
