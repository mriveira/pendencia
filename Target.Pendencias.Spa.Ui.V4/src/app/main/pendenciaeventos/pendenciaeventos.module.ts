import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaEventosComponent } from './pendenciaeventos.component';
import { PendenciaEventosEditComponent } from './pendenciaeventos-edit/pendenciaeventos-edit.component';
import { PendenciaEventosFieldCreateComponent } from './pendenciaeventos-field-create/pendenciaeventos-field-create.component';
import { PendenciaEventosFieldEditComponent } from './pendenciaeventos-field-edit/pendenciaeventos-field-edit.component';
import { PendenciaEventosFilterComponent } from './pendenciaeventos-filter/pendenciaeventos-filter.component';
import { PendenciaEventosPrintModule } from './pendenciaeventos-print/pendenciaeventos-print.module';
import { PendenciaEventosRoutingModule } from './pendenciaeventos.routing.module';
import { PendenciaEventosService } from './pendenciaeventos.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        PendenciaEventosRoutingModule,
        PendenciaEventosPrintModule
    ],
    declarations: [
        PendenciaEventosComponent,
        PendenciaEventosEditComponent,
		PendenciaEventosFieldCreateComponent,
		PendenciaEventosFieldEditComponent,
        PendenciaEventosFilterComponent,
    ],
    providers: [PendenciaEventosService, ApiService],
})
export class PendenciaEventosModule {



}