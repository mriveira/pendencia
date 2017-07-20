import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaTipoComponent } from './pendenciatipo.component';
import { PendenciaTipoEditComponent } from './pendenciatipo-edit/pendenciatipo-edit.component';
import { PendenciaTipoFieldCreateComponent } from './pendenciatipo-field-create/pendenciatipo-field-create.component';
import { PendenciaTipoFieldEditComponent } from './pendenciatipo-field-edit/pendenciatipo-field-edit.component';
import { PendenciaTipoFilterComponent } from './pendenciatipo-filter/pendenciatipo-filter.component';
import { PendenciaTipoPrintModule } from './pendenciatipo-print/pendenciatipo-print.module';
import { PendenciaTipoRoutingModule } from './pendenciatipo.routing.module';
import { PendenciaTipoService } from './pendenciatipo.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        PendenciaTipoRoutingModule,
        PendenciaTipoPrintModule
    ],
    declarations: [
        PendenciaTipoComponent,
        PendenciaTipoEditComponent,
		PendenciaTipoFieldCreateComponent,
		PendenciaTipoFieldEditComponent,
        PendenciaTipoFilterComponent,
    ],
    providers: [PendenciaTipoService, ApiService],
})
export class PendenciaTipoModule {



}