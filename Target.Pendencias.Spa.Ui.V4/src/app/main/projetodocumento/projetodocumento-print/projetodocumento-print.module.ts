import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoDocumentoPrintComponent } from './projetodocumento-print.component';
import { ProjetoDocumentoPrintRoutingModule } from './projetodocumento-print.routing.module';

import { ProjetoDocumentoService } from '../projetodocumento.service';
import { ApiService } from 'app/common/services/api.service';
import { ProjetoDocumentoServiceFields } from '../projetodocumento.service.fields';

import { ProjetoDocumentoContainerDetailsComponent } from '../projetodocumento-container-details/projetodocumento-container-details.component';
import { ProjetoDocumentoFieldDetailsComponent } from '../projetodocumento-field-details/projetodocumento-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ProjetoDocumentoPrintRoutingModule,
    ],
    declarations: [
        ProjetoDocumentoPrintComponent,
        ProjetoDocumentoContainerDetailsComponent,
		ProjetoDocumentoFieldDetailsComponent
    ],
    providers: [ProjetoDocumentoService, ApiService, ProjetoDocumentoServiceFields],
    exports: [ProjetoDocumentoContainerDetailsComponent,ProjetoDocumentoFieldDetailsComponent]
})
export class ProjetoDocumentoPrintModule {

}
