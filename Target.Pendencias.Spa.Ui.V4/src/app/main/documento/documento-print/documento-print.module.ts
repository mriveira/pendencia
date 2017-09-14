import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoPrintComponent } from './documento-print.component';
import { DocumentoPrintRoutingModule } from './documento-print.routing.module';

import { DocumentoService } from '../documento.service';
import { ApiService } from 'app/common/services/api.service';
import { DocumentoServiceFields } from '../documento.service.fields';

import { DocumentoContainerDetailsComponent } from '../documento-container-details/documento-container-details.component';
import { DocumentoFieldDetailsComponent } from '../documento-field-details/documento-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        DocumentoPrintRoutingModule,
    ],
    declarations: [
        DocumentoPrintComponent,
        DocumentoContainerDetailsComponent,
		DocumentoFieldDetailsComponent
    ],
    providers: [DocumentoService, ApiService, DocumentoServiceFields],
    exports: [DocumentoContainerDetailsComponent,DocumentoFieldDetailsComponent]
})
export class DocumentoPrintModule {

}
