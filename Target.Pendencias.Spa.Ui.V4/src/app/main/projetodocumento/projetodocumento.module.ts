import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ProjetoDocumentoComponent } from './projetodocumento.component';

import { ProjetoDocumentoContainerFilterComponent } from './projetodocumento-container-filter/projetodocumento-container-filter.component';
import { ProjetoDocumentoFieldFilterComponent } from './projetodocumento-field-filter/projetodocumento-field-filter.component';

import { ProjetoDocumentoEditComponent } from './projetodocumento-edit/projetodocumento-edit.component';
import { ProjetoDocumentoCreateComponent } from './projetodocumento-create/projetodocumento-create.component';
import { ProjetoDocumentoDetailsComponent } from './projetodocumento-details/projetodocumento-details.component';

import { ProjetoDocumentoFieldCreateComponent } from './projetodocumento-field-create/projetodocumento-field-create.component';
import { ProjetoDocumentoFieldEditComponent } from './projetodocumento-field-edit/projetodocumento-field-edit.component';

import { ProjetoDocumentoContainerCreateComponent } from './projetodocumento-container-create/projetodocumento-container-create.component';
import { ProjetoDocumentoContainerEditComponent } from './projetodocumento-container-edit/projetodocumento-container-edit.component';

import { ProjetoDocumentoPrintModule } from './projetodocumento-print/projetodocumento-print.module';
import { ProjetoDocumentoRoutingModule } from './projetodocumento.routing.module';

import { ProjetoDocumentoService } from './projetodocumento.service';
import { ProjetoDocumentoServiceFields } from './projetodocumento.service.fields';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        ProjetoDocumentoRoutingModule,
        ProjetoDocumentoPrintModule
    ],
    declarations: [
        ProjetoDocumentoComponent,
		ProjetoDocumentoContainerFilterComponent,
		ProjetoDocumentoFieldFilterComponent,
        ProjetoDocumentoEditComponent,
		ProjetoDocumentoCreateComponent,
		ProjetoDocumentoDetailsComponent,
		ProjetoDocumentoFieldCreateComponent,
		ProjetoDocumentoFieldEditComponent,
		ProjetoDocumentoContainerCreateComponent,
		ProjetoDocumentoContainerEditComponent
    ],
    providers: [ProjetoDocumentoService,ProjetoDocumentoServiceFields, ApiService],
})
export class ProjetoDocumentoModule {


}