import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';

@Injectable()
export class PendenciaService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>) {

		super();

		this._form = new FormGroup({
            projetoId : new FormControl(),
            pendenciaId : new FormControl(),
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

    initVM(): ViewModel {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " Pendencia",
            actionDescription: "",
            downloadUri: GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
			details: {},
            infos: this.getInfos(),
            grid: super.getInfoGrid(this.getInfos()),
            form: this._form
        });
    }

	getInfos() {
		return {
				projetoId: { label: 'projetoId', type: 'int', isKey: false, list:false },
				pendenciaId: { label: 'pendenciaId', type: 'int', isKey: true, list:false },
				resumo: { label: 'resumo', type: 'string', isKey: false, list:true },
				descricao: { label: 'descricao', type: 'string', isKey: false, list:false },
				requisitadoPor: { label: 'requisitadoPor', type: 'string', isKey: false, list:true },
				tempoEstimado: { label: 'tempoEstimado', type: 'int?', isKey: false, list:true },
				pontosEstimados: { label: 'pontosEstimados', type: 'int?', isKey: false, list:true },
				prazo: { label: 'prazo', type: 'DateTime?', isKey: false, list:true },
				usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list:false },
				pendenciaTipoId: { label: 'pendenciaTipoId', type: 'int', isKey: false, list:false },
				fluxoTrabalhoStatusId: { label: 'fluxoTrabalhoStatusId', type: 'int', isKey: false, list:false },
				pendenciaPrioridadeId: { label: 'pendenciaPrioridadeId', type: 'int', isKey: false, list:false },
				tags: { label: 'tags', type: 'string', isKey: false, list:true },
				dataConclusao: { label: 'dataConclusao', type: 'DateTime?', isKey: false, list:true },

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

}
