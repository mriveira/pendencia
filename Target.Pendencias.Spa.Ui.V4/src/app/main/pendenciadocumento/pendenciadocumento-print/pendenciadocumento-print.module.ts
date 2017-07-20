import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaDocumentoPrintComponent } from './pendenciadocumento-print.component';
import { PendenciaDocumentoPrintRoutingModule } from './pendenciadocumento-print.routing.module';

import { PendenciaDocumentoService } from '../pendenciadocumento.service';
import { ApiService } from 'app/common/services/api.service';

import { PendenciaDocumentoDetailsComponent } from '../pendenciadocumento-details/pendenciadocumento-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaDocumentoPrintRoutingModule,
    ],
    declarations: [
        PendenciaDocumentoPrintComponent,
        PendenciaDocumentoDetailsComponent
    ],
    providers: [PendenciaDocumentoService, ApiService],
    exports: [PendenciaDocumentoDetailsComponent]
})
export class PendenciaDocumentoPrintModule {

}
