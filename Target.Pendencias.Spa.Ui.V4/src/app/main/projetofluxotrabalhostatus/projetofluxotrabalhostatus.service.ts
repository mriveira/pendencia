import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';
import { ProjetoFluxoTrabalhoStatusServiceFields } from './projetofluxotrabalhostatus.service.fields';
import { GlobalServiceCulture, Translated, TranslatedField } from '../../global.service.culture';
import { MainService } from '../main.service';

@Injectable()
export class ProjetoFluxoTrabalhoStatusService extends ServiceBase {

	private _form : FormGroup;

    constructor(private api: ApiService<any>,private serviceFields: ProjetoFluxoTrabalhoStatusServiceFields, private globalServiceCulture: GlobalServiceCulture, private mainService: MainService) {

		super();
		this._form = this.serviceFields.getFormFields();

    }

    initVM(): ViewModel<any> {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " ProjetoFluxoTrabalhoStatus",
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
		return this.serviceFields.getInfosFields();
    }

	getInfoGrid(infos : any) {
        return super.getInfoGrid(infos)
    }

    updateCulture(culture: string = null) {
        return this.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    updateCultureMain(culture: string = null) {
        return this.mainService.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    getInfosTranslated(culture: string) {
        var grupo = "ProjetoFluxoTrabalhoStatus";
        return this.globalServiceCulture.getResource(grupo, culture, this.serviceFields.getInfosFields(), (culture, infosFields) => {
            return new Promise((resolve, reject) => {
                var translated = new Translated([]);
                return resolve(this.globalServiceCulture.setResource(grupo, translated.get(culture), infosFields));
            });
        });
    }

    get(filters?: any): Observable<any> {
        return this.api.setResource('ProjetoFluxoTrabalhoStatus').get(filters);
    }

	getDataCustom(filters?: any): Observable<any> {
        return this.api.setResource('ProjetoFluxoTrabalhoStatus').getDataCustom(filters);
    }

	getDataListCustom(filters?: any): Observable<any> {
        return this.api.setResource('ProjetoFluxoTrabalhoStatus').getDataListCustom(filters);
    }

    save(model: any): Observable<any> {

        if ( model.projetoId != undefined &&  model.fluxoTrabalhoStatusId != undefined) {
            return this.api.setResource('ProjetoFluxoTrabalhoStatus').put(model);
        }

        return this.api.setResource('ProjetoFluxoTrabalhoStatus').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('ProjetoFluxoTrabalhoStatus').delete(model);

    }
    
    export(filters?: any): Observable<any>
    {
        return this.api.setResource('ProjetoFluxoTrabalhoStatus').export(filters);
    }
}
