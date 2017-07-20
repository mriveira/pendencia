import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendeciaPrioridadeComponent } from './pendeciaprioridade.component';
import { PendeciaPrioridadeEditComponent } from './pendeciaprioridade-edit/pendeciaprioridade-edit.component';
import { PendeciaPrioridadeFieldCreateComponent } from './pendeciaprioridade-field-create/pendeciaprioridade-field-create.component';
import { PendeciaPrioridadeFieldEditComponent } from './pendeciaprioridade-field-edit/pendeciaprioridade-field-edit.component';
import { PendeciaPrioridadeFilterComponent } from './pendeciaprioridade-filter/pendeciaprioridade-filter.component';
import { PendeciaPrioridadePrintModule } from './pendeciaprioridade-print/pendeciaprioridade-print.module';
import { PendeciaPrioridadeRoutingModule } from './pendeciaprioridade.routing.module';
import { PendeciaPrioridadeService } from './pendeciaprioridade.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        PendeciaPrioridadeRoutingModule,
        PendeciaPrioridadePrintModule
    ],
    declarations: [
        PendeciaPrioridadeComponent,
        PendeciaPrioridadeEditComponent,
		PendeciaPrioridadeFieldCreateComponent,
		PendeciaPrioridadeFieldEditComponent,
        PendeciaPrioridadeFilterComponent,
    ],
    providers: [PendeciaPrioridadeService, ApiService],
})
export class PendeciaPrioridadeModule {



}