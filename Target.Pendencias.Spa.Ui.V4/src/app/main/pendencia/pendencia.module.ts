import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaComponent } from './pendencia.component';
import { PendenciaEditComponent } from './pendencia-edit/pendencia-edit.component';
import { PendenciaFieldCreateComponent } from './pendencia-field-create/pendencia-field-create.component';
import { PendenciaFieldEditComponent } from './pendencia-field-edit/pendencia-field-edit.component';
import { PendenciaFilterComponent } from './pendencia-filter/pendencia-filter.component';
import { PendenciaPrintModule } from './pendencia-print/pendencia-print.module';
import { PendenciaRoutingModule } from './pendencia.routing.module';
import { PendenciaService } from './pendencia.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        PendenciaRoutingModule,
        PendenciaPrintModule
    ],
    declarations: [
        PendenciaComponent,
        PendenciaEditComponent,
		PendenciaFieldCreateComponent,
		PendenciaFieldEditComponent,
        PendenciaFilterComponent,
    ],
    providers: [PendenciaService, ApiService],
})
export class PendenciaModule {



}