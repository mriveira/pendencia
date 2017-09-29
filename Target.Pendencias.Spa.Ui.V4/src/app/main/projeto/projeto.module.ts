import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ProjetoComponent } from './projeto.component';

import { ProjetoContainerFilterComponent } from './projeto-container-filter/projeto-container-filter.component';
import { ProjetoFieldFilterComponent } from './projeto-field-filter/projeto-field-filter.component';

import { ProjetoEditComponent } from './projeto-edit/projeto-edit.component';
import { ProjetoCreateComponent } from './projeto-create/projeto-create.component';
import { ProjetoDetailsComponent } from './projeto-details/projeto-details.component';

import { ProjetoFieldCreateComponent } from './projeto-field-create/projeto-field-create.component';
import { ProjetoFieldEditComponent } from './projeto-field-edit/projeto-field-edit.component';

import { ProjetoContainerCreateComponent } from './projeto-container-create/projeto-container-create.component';
import { ProjetoContainerEditComponent } from './projeto-container-edit/projeto-container-edit.component';

import { ProjetoPrintModule } from './projeto-print/projeto-print.module';
import { ProjetoRoutingModule } from './projeto.routing.module';

import { ProjetoService } from './projeto.service';
import { ProjetoServiceFields } from './projeto.service.fields';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

import { DocumentAttachModalComponent } from './documento-attach-modal/documento-attach-modal.component';
import { ProjetoDocumentoService } from '../projetodocumento/projetodocumento.service';
import { ProjetoDocumentoServiceFields } from '../projetodocumento/projetodocumento.service.fields';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        ProjetoRoutingModule,
        ProjetoPrintModule
    ],
    declarations: [
        ProjetoComponent,
		ProjetoContainerFilterComponent,
		ProjetoFieldFilterComponent,
        ProjetoEditComponent,
		ProjetoCreateComponent,
		ProjetoDetailsComponent,
		ProjetoFieldCreateComponent,
		ProjetoFieldEditComponent,
		ProjetoContainerCreateComponent,
        ProjetoContainerEditComponent,
        DocumentAttachModalComponent
    ],
    providers: [ProjetoService, ProjetoServiceFields, ApiService, ProjetoDocumentoService, ProjetoDocumentoServiceFields],
})
export class ProjetoModule {


}