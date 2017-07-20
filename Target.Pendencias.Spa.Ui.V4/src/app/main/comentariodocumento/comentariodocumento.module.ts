import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ComentarioDocumentoComponent } from './comentariodocumento.component';
import { ComentarioDocumentoEditComponent } from './comentariodocumento-edit/comentariodocumento-edit.component';
import { ComentarioDocumentoFieldCreateComponent } from './comentariodocumento-field-create/comentariodocumento-field-create.component';
import { ComentarioDocumentoFieldEditComponent } from './comentariodocumento-field-edit/comentariodocumento-field-edit.component';
import { ComentarioDocumentoFilterComponent } from './comentariodocumento-filter/comentariodocumento-filter.component';
import { ComentarioDocumentoPrintModule } from './comentariodocumento-print/comentariodocumento-print.module';
import { ComentarioDocumentoRoutingModule } from './comentariodocumento.routing.module';
import { ComentarioDocumentoService } from './comentariodocumento.service';

import { ApiService } from 'app/common/services/api.service';
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
        ComentarioDocumentoEditComponent,
		ComentarioDocumentoFieldCreateComponent,
		ComentarioDocumentoFieldEditComponent,
        ComentarioDocumentoFilterComponent,
    ],
    providers: [ComentarioDocumentoService, ApiService],
})
export class ComentarioDocumentoModule {



}