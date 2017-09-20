import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { DocumentoComponent } from './documento.component';

import { DocumentoContainerFilterComponent } from './documento-container-filter/documento-container-filter.component';
import { DocumentoFieldFilterComponent } from './documento-field-filter/documento-field-filter.component';

import { DocumentoEditComponent } from './documento-edit/documento-edit.component';
import { DocumentoCreateComponent } from './documento-create/documento-create.component';
import { DocumentoDetailsComponent } from './documento-details/documento-details.component';

import { DocumentoFieldCreateComponent } from './documento-field-create/documento-field-create.component';
import { DocumentoFieldEditComponent } from './documento-field-edit/documento-field-edit.component';

import { DocumentoContainerCreateComponent } from './documento-container-create/documento-container-create.component';
import { DocumentoContainerEditComponent } from './documento-container-edit/documento-container-edit.component';

import { DocumentoPrintModule } from './documento-print/documento-print.module';
import { DocumentoRoutingModule } from './documento.routing.module';

import { DocumentoService } from './documento.service';
import { DocumentoServiceFields } from './documento.service.fields';

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
        DocumentoRoutingModule,
        DocumentoPrintModule
    ],
    declarations: [
        DocumentoComponent,
		DocumentoContainerFilterComponent,
		DocumentoFieldFilterComponent,
        DocumentoEditComponent,
		DocumentoCreateComponent,
		DocumentoDetailsComponent,
		DocumentoFieldCreateComponent,
		DocumentoFieldEditComponent,
		DocumentoContainerCreateComponent,
		DocumentoContainerEditComponent
    ],
    providers: [DocumentoService,DocumentoServiceFields, ApiService, GlobalService],
})
export class DocumentoModule {


}