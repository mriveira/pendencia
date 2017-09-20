import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ClienteComponent } from './cliente.component';

import { ClienteContainerFilterComponent } from './cliente-container-filter/cliente-container-filter.component';
import { ClienteFieldFilterComponent } from './cliente-field-filter/cliente-field-filter.component';

import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';

import { ClienteFieldCreateComponent } from './cliente-field-create/cliente-field-create.component';
import { ClienteFieldEditComponent } from './cliente-field-edit/cliente-field-edit.component';

import { ClienteContainerCreateComponent } from './cliente-container-create/cliente-container-create.component';
import { ClienteContainerEditComponent } from './cliente-container-edit/cliente-container-edit.component';

import { ClientePrintModule } from './cliente-print/cliente-print.module';
import { ClienteRoutingModule } from './cliente.routing.module';

import { ClienteService } from './cliente.service';
import { ClienteServiceFields } from './cliente.service.fields';

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
        ClienteRoutingModule,
        ClientePrintModule
    ],
    declarations: [
        ClienteComponent,
		ClienteContainerFilterComponent,
		ClienteFieldFilterComponent,
        ClienteEditComponent,
		ClienteCreateComponent,
		ClienteDetailsComponent,
		ClienteFieldCreateComponent,
		ClienteFieldEditComponent,
		ClienteContainerCreateComponent,
		ClienteContainerEditComponent
    ],
    providers: [ClienteService,ClienteServiceFields, ApiService, GlobalService],
})
export class ClienteModule {


}