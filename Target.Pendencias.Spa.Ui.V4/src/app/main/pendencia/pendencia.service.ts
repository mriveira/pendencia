import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';
import { PendenciaServiceFields } from './pendencia.service.fields';
import { GlobalServiceCulture, Translated, TranslatedField } from '../../global.service.culture';
import { MainService } from '../main.service';

@Injectable()
export class PendenciaService extends ServiceBase {

    private _form: FormGroup;

    constructor(private api: ApiService<any>, private serviceFields: PendenciaServiceFields, private globalServiceCulture: GlobalServiceCulture, private mainService: MainService) {

        super();
        this._form = this.serviceFields.getFormFields({ documento: new FormControl() });

    }

    initVM(): ViewModel<any> {

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
            grid: this.getInfoGrid(this.getInfos()),
            generalInfo: this.mainService.getInfos(),
            form: this._form,
            masks: this.masksConfig()
        });
    }

    getInfos() {
        return {
            projetoId: { label: 'ProjetoId', type: 'int', isKey: false, list: false },
            "projeto.nome": { label: 'Projeto', type: 'string', isKey: false, list: true },
            resumo: { label: 'Resumo', type: 'string', isKey: false, list: true },
            descricao: { label: 'Descricao', type: 'string', isKey: false, list: false },
            requisitadoPor: { label: 'Requisitor', type: 'string', isKey: false, list: false },
            tags: { label: 'Tags', type: 'string', isKey: false, list: false },
            prazo: { label: 'Prazo', type: 'DateTime?', isKey: false, list: true },
            dataConclusao: { label: 'DataConclusao', type: 'DateTime?', isKey: false, list: false },
            pendenciaId: { label: 'PendenciaId', type: 'int', isKey: true, list: false },
            tempoEstimado: { label: 'Horas', type: 'int?', isKey: false, list: true },
            pontosEstimados: { label: 'pontosEstimados', type: 'dataitem', isKey: false, list: false, aux: [{ id: 0, name: '0 Pontos' }, { id: 1, name: '1 Ponto' }, { id: 2, name: '2 Pontos' }, { id: 3, name: '3 Pontos' }, { id: 5, name: '5 Pontos' }, { id: 8, name: '8 Pontos' }, { id: 13, name: '13 Pontos' }, { id: 20, name: '20 Pontos' }, { id: 40, name: '40 Pontos' }, { id: 100, name: '100 Pontos' }] },
            usuarioId: { label: 'usuarioId', type: 'int', isKey: false, list: false },
            pendenciaTipoId: { label: 'pendenciaTipoId', type: 'int', isKey: false, list: false },
            fluxoTrabalhoStatusId: { label: 'fluxoTrabalhoStatusId', type: 'int', isKey: false, list: false },
            pendenciaPrioridadeId: { label: 'pendenciaPrioridadeId', type: 'int', isKey: false, list: false },
            documento: { label: 'documento', type: 'string', isKey: false, list: false },
        }

    }

    getInfoGrid(infos: any) {
        return super.getInfoGrid(infos)
    }

    updateCulture(culture: string = null) {
        return this.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    updateCultureMain(culture: string = null) {
        return this.mainService.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    getInfosTranslated(culture: string) {
        var grupo = "Pendencia";
        return this.globalServiceCulture.getResource(grupo, culture, this.getInfos(), (culture, infosFields) => {
            return new Promise((resolve, reject) => {
                var translated = new Translated([]);
                return resolve(this.globalServiceCulture.setResource(grupo, translated.get(culture), infosFields));
            });
        });
    }

    get(filters?: any): Observable<any> {

        return this.api.setResource('Pendencia').get(filters);
    }

    getDataCustom(filters?: any): Observable<any> {
        return this.api.setResource('Pendencia').getDataCustom(filters);
    }

    getDataListCustom(filters?: any): Observable<any> {
        return this.api.setResource('Pendencia').getDataListCustom(filters);
    }

    save(model: any): Observable<any> {

        var extIndex = model.documento.split('.').length - 1;
        var newModel = Object.assign(model, {
            documento: {
                arquivo: model.documento,
                ext: model.documento.split('.')[extIndex]
            }
        });

        if (newModel.pendenciaId != undefined) {
            return this.api.setResource('Pendencia').put(newModel);
        }

        return this.api.setResource('Pendencia').post(newModel);
    }

    delete(model: any): Observable<any> {
        return this.api.setResource('Pendencia').delete(model);
    }

    export(filters?: any): Observable<any> {
        return this.api.setResource('Pendencia').export(filters);
    }
}
