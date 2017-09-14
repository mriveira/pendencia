import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioDocumentoPrintComponent } from './comentariodocumento-print.component';
import { ComentarioDocumentoPrintRoutingModule } from './comentariodocumento-print.routing.module';

import { ComentarioDocumentoService } from '../comentariodocumento.service';
import { ApiService } from 'app/common/services/api.service';
import { ComentarioDocumentoServiceFields } from '../comentariodocumento.service.fields';

import { ComentarioDocumentoContainerDetailsComponent } from '../comentariodocumento-container-details/comentariodocumento-container-details.component';
import { ComentarioDocumentoFieldDetailsComponent } from '../comentariodocumento-field-details/comentariodocumento-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ComentarioDocumentoPrintRoutingModule,
    ],
    declarations: [
        ComentarioDocumentoPrintComponent,
        ComentarioDocumentoContainerDetailsComponent,
		ComentarioDocumentoFieldDetailsComponent
    ],
    providers: [ComentarioDocumentoService, ApiService, ComentarioDocumentoServiceFields],
    exports: [ComentarioDocumentoContainerDetailsComponent,ComentarioDocumentoFieldDetailsComponent]
})
export class ComentarioDocumentoPrintModule {

}
