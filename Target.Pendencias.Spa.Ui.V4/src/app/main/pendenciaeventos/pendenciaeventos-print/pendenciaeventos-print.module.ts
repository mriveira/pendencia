import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaEventosPrintComponent } from './pendenciaeventos-print.component';
import { PendenciaEventosPrintRoutingModule } from './pendenciaeventos-print.routing.module';

import { PendenciaEventosService } from '../pendenciaeventos.service';
import { ApiService } from 'app/common/services/api.service';

import { PendenciaEventosDetailsComponent } from '../pendenciaeventos-details/pendenciaeventos-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaEventosPrintRoutingModule,
    ],
    declarations: [
        PendenciaEventosPrintComponent,
        PendenciaEventosDetailsComponent
    ],
    providers: [PendenciaEventosService, ApiService],
    exports: [PendenciaEventosDetailsComponent]
})
export class PendenciaEventosPrintModule {

}
