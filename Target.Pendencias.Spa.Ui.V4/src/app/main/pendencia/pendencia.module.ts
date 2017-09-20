import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaComponent } from './pendencia.component';

import { PendenciaContainerFilterComponent } from './pendencia-container-filter/pendencia-container-filter.component';
import { PendenciaFieldFilterComponent } from './pendencia-field-filter/pendencia-field-filter.component';

import { PendenciaEditComponent } from './pendencia-edit/pendencia-edit.component';
import { PendenciaCreateComponent } from './pendencia-create/pendencia-create.component';
import { PendenciaDetailsComponent } from './pendencia-details/pendencia-details.component';

import { PendenciaFieldCreateComponent } from './pendencia-field-create/pendencia-field-create.component';
import { PendenciaFieldEditComponent } from './pendencia-field-edit/pendencia-field-edit.component';

import { PendenciaContainerCreateComponent } from './pendencia-container-create/pendencia-container-create.component';
import { PendenciaContainerEditComponent } from './pendencia-container-edit/pendencia-container-edit.component';

import { PendenciaPrintModule } from './pendencia-print/pendencia-print.module';
import { PendenciaRoutingModule } from './pendencia.routing.module';

import { PendenciaService } from './pendencia.service';
import { PendenciaServiceFields } from './pendencia.service.fields';

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
        PendenciaRoutingModule,
        PendenciaPrintModule
    ],
    declarations: [
        PendenciaComponent,
		PendenciaContainerFilterComponent,
		PendenciaFieldFilterComponent,
        PendenciaEditComponent,
		PendenciaCreateComponent,
		PendenciaDetailsComponent,
		PendenciaFieldCreateComponent,
		PendenciaFieldEditComponent,
		PendenciaContainerCreateComponent,
		PendenciaContainerEditComponent
    ],
    providers: [PendenciaService,PendenciaServiceFields, ApiService, GlobalService],
})
export class PendenciaModule {


}