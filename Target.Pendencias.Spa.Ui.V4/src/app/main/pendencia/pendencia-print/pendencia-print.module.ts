import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaPrintComponent } from './pendencia-print.component';
import { PendenciaPrintRoutingModule } from './pendencia-print.routing.module';

import { PendenciaService } from '../pendencia.service';
import { ApiService } from 'app/common/services/api.service';

import { PendenciaDetailsComponent } from '../pendencia-details/pendencia-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaPrintRoutingModule,
    ],
    declarations: [
        PendenciaPrintComponent,
        PendenciaDetailsComponent
    ],
    providers: [PendenciaService, ApiService],
    exports: [PendenciaDetailsComponent]
})
export class PendenciaPrintModule {

}
