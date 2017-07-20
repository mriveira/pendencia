import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ClienteComponent } from './cliente.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteFieldCreateComponent } from './cliente-field-create/cliente-field-create.component';
import { ClienteFieldEditComponent } from './cliente-field-edit/cliente-field-edit.component';
import { ClienteFilterComponent } from './cliente-filter/cliente-filter.component';
import { ClientePrintModule } from './cliente-print/cliente-print.module';
import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteService } from './cliente.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        ClienteRoutingModule,
        ClientePrintModule
    ],
    declarations: [
        ClienteComponent,
        ClienteEditComponent,
		ClienteFieldCreateComponent,
		ClienteFieldEditComponent,
        ClienteFilterComponent,
    ],
    providers: [ClienteService, ApiService],
})
export class ClienteModule {



}