import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaDocumentoComponent } from './pendenciadocumento.component';

import { PendenciaDocumentoContainerFilterComponent } from './pendenciadocumento-container-filter/pendenciadocumento-container-filter.component';
import { PendenciaDocumentoFieldFilterComponent } from './pendenciadocumento-field-filter/pendenciadocumento-field-filter.component';

import { PendenciaDocumentoEditComponent } from './pendenciadocumento-edit/pendenciadocumento-edit.component';
import { PendenciaDocumentoCreateComponent } from './pendenciadocumento-create/pendenciadocumento-create.component';
import { PendenciaDocumentoDetailsComponent } from './pendenciadocumento-details/pendenciadocumento-details.component';

import { PendenciaDocumentoFieldCreateComponent } from './pendenciadocumento-field-create/pendenciadocumento-field-create.component';
import { PendenciaDocumentoFieldEditComponent } from './pendenciadocumento-field-edit/pendenciadocumento-field-edit.component';

import { PendenciaDocumentoContainerCreateComponent } from './pendenciadocumento-container-create/pendenciadocumento-container-create.component';
import { PendenciaDocumentoContainerEditComponent } from './pendenciadocumento-container-edit/pendenciadocumento-container-edit.component';

import { PendenciaDocumentoPrintModule } from './pendenciadocumento-print/pendenciadocumento-print.module';
import { PendenciaDocumentoRoutingModule } from './pendenciadocumento.routing.module';

import { PendenciaDocumentoService } from './pendenciadocumento.service';
import { PendenciaDocumentoServiceFields } from './pendenciadocumento.service.fields';

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
        PendenciaDocumentoRoutingModule,
        PendenciaDocumentoPrintModule
    ],
    declarations: [
        PendenciaDocumentoComponent,
		PendenciaDocumentoContainerFilterComponent,
		PendenciaDocumentoFieldFilterComponent,
        PendenciaDocumentoEditComponent,
		PendenciaDocumentoCreateComponent,
		PendenciaDocumentoDetailsComponent,
		PendenciaDocumentoFieldCreateComponent,
		PendenciaDocumentoFieldEditComponent,
		PendenciaDocumentoContainerCreateComponent,
		PendenciaDocumentoContainerEditComponent
    ],
    providers: [PendenciaDocumentoService,PendenciaDocumentoServiceFields, ApiService, GlobalService],
})
export class PendenciaDocumentoModule {


}