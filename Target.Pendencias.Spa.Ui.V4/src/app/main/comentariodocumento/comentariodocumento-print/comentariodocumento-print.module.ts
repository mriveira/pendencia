import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioDocumentoPrintComponent } from './comentariodocumento-print.component';
import { ComentarioDocumentoPrintRoutingModule } from './comentariodocumento-print.routing.module';

import { ComentarioDocumentoService } from '../comentariodocumento.service';
import { ApiService } from 'app/common/services/api.service';

import { ComentarioDocumentoDetailsComponent } from '../comentariodocumento-details/comentariodocumento-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ComentarioDocumentoPrintRoutingModule,
    ],
    declarations: [
        ComentarioDocumentoPrintComponent,
        ComentarioDocumentoDetailsComponent
    ],
    providers: [ComentarioDocumentoService, ApiService],
    exports: [ComentarioDocumentoDetailsComponent]
})
export class ComentarioDocumentoPrintModule {

}
