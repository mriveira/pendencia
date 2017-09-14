import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendeciaPrioridadeComponent } from './pendeciaprioridade.component';

import { PendeciaPrioridadeContainerFilterComponent } from './pendeciaprioridade-container-filter/pendeciaprioridade-container-filter.component';
import { PendeciaPrioridadeFieldFilterComponent } from './pendeciaprioridade-field-filter/pendeciaprioridade-field-filter.component';

import { PendeciaPrioridadeEditComponent } from './pendeciaprioridade-edit/pendeciaprioridade-edit.component';
import { PendeciaPrioridadeCreateComponent } from './pendeciaprioridade-create/pendeciaprioridade-create.component';
import { PendeciaPrioridadeDetailsComponent } from './pendeciaprioridade-details/pendeciaprioridade-details.component';

import { PendeciaPrioridadeFieldCreateComponent } from './pendeciaprioridade-field-create/pendeciaprioridade-field-create.component';
import { PendeciaPrioridadeFieldEditComponent } from './pendeciaprioridade-field-edit/pendeciaprioridade-field-edit.component';

import { PendeciaPrioridadeContainerCreateComponent } from './pendeciaprioridade-container-create/pendeciaprioridade-container-create.component';
import { PendeciaPrioridadeContainerEditComponent } from './pendeciaprioridade-container-edit/pendeciaprioridade-container-edit.component';

import { PendeciaPrioridadePrintModule } from './pendeciaprioridade-print/pendeciaprioridade-print.module';
import { PendeciaPrioridadeRoutingModule } from './pendeciaprioridade.routing.module';

import { PendeciaPrioridadeService } from './pendeciaprioridade.service';
import { PendeciaPrioridadeServiceFields } from './pendeciaprioridade.service.fields';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        PendeciaPrioridadeRoutingModule,
        PendeciaPrioridadePrintModule
    ],
    declarations: [
        PendeciaPrioridadeComponent,
		PendeciaPrioridadeContainerFilterComponent,
		PendeciaPrioridadeFieldFilterComponent,
        PendeciaPrioridadeEditComponent,
		PendeciaPrioridadeCreateComponent,
		PendeciaPrioridadeDetailsComponent,
		PendeciaPrioridadeFieldCreateComponent,
		PendeciaPrioridadeFieldEditComponent,
		PendeciaPrioridadeContainerCreateComponent,
		PendeciaPrioridadeContainerEditComponent
    ],
    providers: [PendeciaPrioridadeService,PendeciaPrioridadeServiceFields, ApiService],
})
export class PendeciaPrioridadeModule {


}