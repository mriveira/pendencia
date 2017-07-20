import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ProjetoComponent } from './projeto.component';
import { ProjetoEditComponent } from './projeto-edit/projeto-edit.component';
import { ProjetoFieldCreateComponent } from './projeto-field-create/projeto-field-create.component';
import { ProjetoFieldEditComponent } from './projeto-field-edit/projeto-field-edit.component';
import { ProjetoFilterComponent } from './projeto-filter/projeto-filter.component';
import { ProjetoPrintModule } from './projeto-print/projeto-print.module';
import { ProjetoRoutingModule } from './projeto.routing.module';
import { ProjetoService } from './projeto.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        ProjetoRoutingModule,
        ProjetoPrintModule
    ],
    declarations: [
        ProjetoComponent,
        ProjetoEditComponent,
		ProjetoFieldCreateComponent,
		ProjetoFieldEditComponent,
        ProjetoFilterComponent,
    ],
    providers: [ProjetoService, ApiService],
})
export class ProjetoModule {



}