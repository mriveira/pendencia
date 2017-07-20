import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaDocumentoComponent } from './pendenciadocumento.component';
import { PendenciaDocumentoEditComponent } from './pendenciadocumento-edit/pendenciadocumento-edit.component';
import { PendenciaDocumentoFieldCreateComponent } from './pendenciadocumento-field-create/pendenciadocumento-field-create.component';
import { PendenciaDocumentoFieldEditComponent } from './pendenciadocumento-field-edit/pendenciadocumento-field-edit.component';
import { PendenciaDocumentoFilterComponent } from './pendenciadocumento-filter/pendenciadocumento-filter.component';
import { PendenciaDocumentoPrintModule } from './pendenciadocumento-print/pendenciadocumento-print.module';
import { PendenciaDocumentoRoutingModule } from './pendenciadocumento.routing.module';
import { PendenciaDocumentoService } from './pendenciadocumento.service';

import { ApiService } from 'app/common/services/api.service';
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
        PendenciaDocumentoEditComponent,
		PendenciaDocumentoFieldCreateComponent,
		PendenciaDocumentoFieldEditComponent,
        PendenciaDocumentoFilterComponent,
    ],
    providers: [PendenciaDocumentoService, ApiService],
})
export class PendenciaDocumentoModule {



}