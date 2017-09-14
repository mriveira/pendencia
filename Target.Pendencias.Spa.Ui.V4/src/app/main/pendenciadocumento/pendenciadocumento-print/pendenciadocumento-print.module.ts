import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaDocumentoPrintComponent } from './pendenciadocumento-print.component';
import { PendenciaDocumentoPrintRoutingModule } from './pendenciadocumento-print.routing.module';

import { PendenciaDocumentoService } from '../pendenciadocumento.service';
import { ApiService } from 'app/common/services/api.service';
import { PendenciaDocumentoServiceFields } from '../pendenciadocumento.service.fields';

import { PendenciaDocumentoContainerDetailsComponent } from '../pendenciadocumento-container-details/pendenciadocumento-container-details.component';
import { PendenciaDocumentoFieldDetailsComponent } from '../pendenciadocumento-field-details/pendenciadocumento-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaDocumentoPrintRoutingModule,
    ],
    declarations: [
        PendenciaDocumentoPrintComponent,
        PendenciaDocumentoContainerDetailsComponent,
		PendenciaDocumentoFieldDetailsComponent
    ],
    providers: [PendenciaDocumentoService, ApiService, PendenciaDocumentoServiceFields],
    exports: [PendenciaDocumentoContainerDetailsComponent,PendenciaDocumentoFieldDetailsComponent]
})
export class PendenciaDocumentoPrintModule {

}
