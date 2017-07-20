import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaTemposPrintComponent } from './pendenciatempos-print.component';
import { PendenciaTemposPrintRoutingModule } from './pendenciatempos-print.routing.module';

import { PendenciaTemposService } from '../pendenciatempos.service';
import { ApiService } from 'app/common/services/api.service';

import { PendenciaTemposDetailsComponent } from '../pendenciatempos-details/pendenciatempos-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaTemposPrintRoutingModule,
    ],
    declarations: [
        PendenciaTemposPrintComponent,
        PendenciaTemposDetailsComponent
    ],
    providers: [PendenciaTemposService, ApiService],
    exports: [PendenciaTemposDetailsComponent]
})
export class PendenciaTemposPrintModule {

}
