import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaTemposComponent } from './pendenciatempos.component';

import { PendenciaTemposContainerFilterComponent } from './pendenciatempos-container-filter/pendenciatempos-container-filter.component';
import { PendenciaTemposFieldFilterComponent } from './pendenciatempos-field-filter/pendenciatempos-field-filter.component';

import { PendenciaTemposEditComponent } from './pendenciatempos-edit/pendenciatempos-edit.component';
import { PendenciaTemposCreateComponent } from './pendenciatempos-create/pendenciatempos-create.component';
import { PendenciaTemposDetailsComponent } from './pendenciatempos-details/pendenciatempos-details.component';

import { PendenciaTemposFieldCreateComponent } from './pendenciatempos-field-create/pendenciatempos-field-create.component';
import { PendenciaTemposFieldEditComponent } from './pendenciatempos-field-edit/pendenciatempos-field-edit.component';

import { PendenciaTemposContainerCreateComponent } from './pendenciatempos-container-create/pendenciatempos-container-create.component';
import { PendenciaTemposContainerEditComponent } from './pendenciatempos-container-edit/pendenciatempos-container-edit.component';

import { PendenciaTemposPrintModule } from './pendenciatempos-print/pendenciatempos-print.module';
import { PendenciaTemposRoutingModule } from './pendenciatempos.routing.module';

import { PendenciaTemposService } from './pendenciatempos.service';
import { PendenciaTemposServiceFields } from './pendenciatempos.service.fields';

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
        PendenciaTemposRoutingModule,
        PendenciaTemposPrintModule
    ],
    declarations: [
        PendenciaTemposComponent,
		PendenciaTemposContainerFilterComponent,
		PendenciaTemposFieldFilterComponent,
        PendenciaTemposEditComponent,
		PendenciaTemposCreateComponent,
		PendenciaTemposDetailsComponent,
		PendenciaTemposFieldCreateComponent,
		PendenciaTemposFieldEditComponent,
		PendenciaTemposContainerCreateComponent,
		PendenciaTemposContainerEditComponent
    ],
    providers: [PendenciaTemposService,PendenciaTemposServiceFields, ApiService, GlobalService],
})
export class PendenciaTemposModule {


}