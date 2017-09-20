import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaEventosComponent } from './pendenciaeventos.component';

import { PendenciaEventosContainerFilterComponent } from './pendenciaeventos-container-filter/pendenciaeventos-container-filter.component';
import { PendenciaEventosFieldFilterComponent } from './pendenciaeventos-field-filter/pendenciaeventos-field-filter.component';

import { PendenciaEventosEditComponent } from './pendenciaeventos-edit/pendenciaeventos-edit.component';
import { PendenciaEventosCreateComponent } from './pendenciaeventos-create/pendenciaeventos-create.component';
import { PendenciaEventosDetailsComponent } from './pendenciaeventos-details/pendenciaeventos-details.component';

import { PendenciaEventosFieldCreateComponent } from './pendenciaeventos-field-create/pendenciaeventos-field-create.component';
import { PendenciaEventosFieldEditComponent } from './pendenciaeventos-field-edit/pendenciaeventos-field-edit.component';

import { PendenciaEventosContainerCreateComponent } from './pendenciaeventos-container-create/pendenciaeventos-container-create.component';
import { PendenciaEventosContainerEditComponent } from './pendenciaeventos-container-edit/pendenciaeventos-container-edit.component';

import { PendenciaEventosPrintModule } from './pendenciaeventos-print/pendenciaeventos-print.module';
import { PendenciaEventosRoutingModule } from './pendenciaeventos.routing.module';

import { PendenciaEventosService } from './pendenciaeventos.service';
import { PendenciaEventosServiceFields } from './pendenciaeventos.service.fields';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        PendenciaEventosRoutingModule,
        PendenciaEventosPrintModule
    ],
    declarations: [
        PendenciaEventosComponent,
		PendenciaEventosContainerFilterComponent,
		PendenciaEventosFieldFilterComponent,
        PendenciaEventosEditComponent,
		PendenciaEventosCreateComponent,
		PendenciaEventosDetailsComponent,
		PendenciaEventosFieldCreateComponent,
		PendenciaEventosFieldEditComponent,
		PendenciaEventosContainerCreateComponent,
		PendenciaEventosContainerEditComponent
    ],
    providers: [PendenciaEventosService,PendenciaEventosServiceFields, ApiService, GlobalService],
})
export class PendenciaEventosModule {


}