import { Injectable } from '@angular/core';
import { ApiService } from 'app/common/services/api.service';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class FluxoTrabalhoStatusService {



    constructor(private api: ApiService<any>) {

        
    }


    get(filters?: any): Observable<any> {

        return this.api.setResource('FluxoTrabalhoStatus').get(filters);
    }

    save(model: any): Observable<any> {

        if (model.id != "undefined") {
            return this.api.setResource('FluxoTrabalhoStatus').put(model);
        }

        return this.api.setResource('FluxoTrabalhoStatus').post(model);
    }

    delete(model: any): Observable<any> {

        return this.api.setResource('FluxoTrabalhoStatus').delete(model);
    }

}
