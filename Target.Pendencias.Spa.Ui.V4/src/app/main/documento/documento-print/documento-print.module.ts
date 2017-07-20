import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoPrintComponent } from './documento-print.component';
import { DocumentoPrintRoutingModule } from './documento-print.routing.module';

import { DocumentoService } from '../documento.service';
import { ApiService } from 'app/common/services/api.service';

import { DocumentoDetailsComponent } from '../documento-details/documento-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        DocumentoPrintRoutingModule,
    ],
    declarations: [
        DocumentoPrintComponent,
        DocumentoDetailsComponent
    ],
    providers: [DocumentoService, ApiService],
    exports: [DocumentoDetailsComponent]
})
export class DocumentoPrintModule {

}
