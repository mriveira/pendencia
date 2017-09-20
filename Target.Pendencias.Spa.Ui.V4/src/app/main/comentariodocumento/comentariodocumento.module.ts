import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ComentarioDocumentoComponent } from './comentariodocumento.component';

import { ComentarioDocumentoContainerFilterComponent } from './comentariodocumento-container-filter/comentariodocumento-container-filter.component';
import { ComentarioDocumentoFieldFilterComponent } from './comentariodocumento-field-filter/comentariodocumento-field-filter.component';

import { ComentarioDocumentoEditComponent } from './comentariodocumento-edit/comentariodocumento-edit.component';
import { ComentarioDocumentoCreateComponent } from './comentariodocumento-create/comentariodocumento-create.component';
import { ComentarioDocumentoDetailsComponent } from './comentariodocumento-details/comentariodocumento-details.component';

import { ComentarioDocumentoFieldCreateComponent } from './comentariodocumento-field-create/comentariodocumento-field-create.component';
import { ComentarioDocumentoFieldEditComponent } from './comentariodocumento-field-edit/comentariodocumento-field-edit.component';

import { ComentarioDocumentoContainerCreateComponent } from './comentariodocumento-container-create/comentariodocumento-container-create.component';
import { ComentarioDocumentoContainerEditComponent } from './comentariodocumento-container-edit/comentariodocumento-container-edit.component';

import { ComentarioDocumentoPrintModule } from './comentariodocumento-print/comentariodocumento-print.module';
import { ComentarioDocumentoRoutingModule } from './comentariodocumento.routing.module';

import { ComentarioDocumentoService } from './comentariodocumento.service';
import { ComentarioDocumentoServiceFields } from './comentariodocumento.service.fields';

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
        ComentarioDocumentoRoutingModule,
        ComentarioDocumentoPrintModule
    ],
    declarations: [
        ComentarioDocumentoComponent,
		ComentarioDocumentoContainerFilterComponent,
		ComentarioDocumentoFieldFilterComponent,
        ComentarioDocumentoEditComponent,
		ComentarioDocumentoCreateComponent,
		ComentarioDocumentoDetailsComponent,
		ComentarioDocumentoFieldCreateComponent,
		ComentarioDocumentoFieldEditComponent,
		ComentarioDocumentoContainerCreateComponent,
		ComentarioDocumentoContainerEditComponent
    ],
    providers: [ComentarioDocumentoService,ComentarioDocumentoServiceFields, ApiService, GlobalService],
})
export class ComentarioDocumentoModule {


}