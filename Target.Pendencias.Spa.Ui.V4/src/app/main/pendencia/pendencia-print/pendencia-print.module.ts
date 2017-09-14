import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaPrintComponent } from './pendencia-print.component';
import { PendenciaPrintRoutingModule } from './pendencia-print.routing.module';

import { PendenciaService } from '../pendencia.service';
import { ApiService } from 'app/common/services/api.service';
import { PendenciaServiceFields } from '../pendencia.service.fields';

import { PendenciaContainerDetailsComponent } from '../pendencia-container-details/pendencia-container-details.component';
import { PendenciaFieldDetailsComponent } from '../pendencia-field-details/pendencia-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaPrintRoutingModule,
    ],
    declarations: [
        PendenciaPrintComponent,
        PendenciaContainerDetailsComponent,
		PendenciaFieldDetailsComponent
    ],
    providers: [PendenciaService, ApiService, PendenciaServiceFields],
    exports: [PendenciaContainerDetailsComponent,PendenciaFieldDetailsComponent]
})
export class PendenciaPrintModule {

}
