import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcompanhadoresPrintComponent } from './acompanhadores-print.component';
import { AcompanhadoresPrintRoutingModule } from './acompanhadores-print.routing.module';

import { AcompanhadoresService } from '../acompanhadores.service';
import { ApiService } from 'app/common/services/api.service';
import { AcompanhadoresServiceFields } from '../acompanhadores.service.fields';

import { AcompanhadoresContainerDetailsComponent } from '../acompanhadores-container-details/acompanhadores-container-details.component';
import { AcompanhadoresFieldDetailsComponent } from '../acompanhadores-field-details/acompanhadores-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        AcompanhadoresPrintRoutingModule,
    ],
    declarations: [
        AcompanhadoresPrintComponent,
        AcompanhadoresContainerDetailsComponent,
		AcompanhadoresFieldDetailsComponent
    ],
    providers: [AcompanhadoresService, ApiService, AcompanhadoresServiceFields],
    exports: [AcompanhadoresContainerDetailsComponent,AcompanhadoresFieldDetailsComponent]
})
export class AcompanhadoresPrintModule {

}
