import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { DocumentoComponent } from './documento.component';
import { DocumentoEditComponent } from './documento-edit/documento-edit.component';
import { DocumentoFieldCreateComponent } from './documento-field-create/documento-field-create.component';
import { DocumentoFieldEditComponent } from './documento-field-edit/documento-field-edit.component';
import { DocumentoFilterComponent } from './documento-filter/documento-filter.component';
import { DocumentoPrintModule } from './documento-print/documento-print.module';
import { DocumentoRoutingModule } from './documento.routing.module';
import { DocumentoService } from './documento.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        DocumentoRoutingModule,
        DocumentoPrintModule
    ],
    declarations: [
        DocumentoComponent,
        DocumentoEditComponent,
		DocumentoFieldCreateComponent,
		DocumentoFieldEditComponent,
        DocumentoFilterComponent,
    ],
    providers: [DocumentoService, ApiService],
})
export class DocumentoModule {



}