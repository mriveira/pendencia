import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaTemposPrintComponent } from './pendenciatempos-print.component';
import { PendenciaTemposPrintRoutingModule } from './pendenciatempos-print.routing.module';

import { PendenciaTemposService } from '../pendenciatempos.service';
import { ApiService } from 'app/common/services/api.service';
import { PendenciaTemposServiceFields } from '../pendenciatempos.service.fields';

import { PendenciaTemposContainerDetailsComponent } from '../pendenciatempos-container-details/pendenciatempos-container-details.component';
import { PendenciaTemposFieldDetailsComponent } from '../pendenciatempos-field-details/pendenciatempos-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaTemposPrintRoutingModule,
    ],
    declarations: [
        PendenciaTemposPrintComponent,
        PendenciaTemposContainerDetailsComponent,
		PendenciaTemposFieldDetailsComponent
    ],
    providers: [PendenciaTemposService, ApiService, PendenciaTemposServiceFields],
    exports: [PendenciaTemposContainerDetailsComponent,PendenciaTemposFieldDetailsComponent]
})
export class PendenciaTemposPrintModule {

}
