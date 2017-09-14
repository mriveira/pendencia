import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaEventosPrintComponent } from './pendenciaeventos-print.component';
import { PendenciaEventosPrintRoutingModule } from './pendenciaeventos-print.routing.module';

import { PendenciaEventosService } from '../pendenciaeventos.service';
import { ApiService } from 'app/common/services/api.service';
import { PendenciaEventosServiceFields } from '../pendenciaeventos.service.fields';

import { PendenciaEventosContainerDetailsComponent } from '../pendenciaeventos-container-details/pendenciaeventos-container-details.component';
import { PendenciaEventosFieldDetailsComponent } from '../pendenciaeventos-field-details/pendenciaeventos-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaEventosPrintRoutingModule,
    ],
    declarations: [
        PendenciaEventosPrintComponent,
        PendenciaEventosContainerDetailsComponent,
		PendenciaEventosFieldDetailsComponent
    ],
    providers: [PendenciaEventosService, ApiService, PendenciaEventosServiceFields],
    exports: [PendenciaEventosContainerDetailsComponent,PendenciaEventosFieldDetailsComponent]
})
export class PendenciaEventosPrintModule {

}
