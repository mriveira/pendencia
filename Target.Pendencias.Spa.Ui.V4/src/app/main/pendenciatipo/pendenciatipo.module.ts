import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaTipoComponent } from './pendenciatipo.component';

import { PendenciaTipoContainerFilterComponent } from './pendenciatipo-container-filter/pendenciatipo-container-filter.component';
import { PendenciaTipoFieldFilterComponent } from './pendenciatipo-field-filter/pendenciatipo-field-filter.component';

import { PendenciaTipoEditComponent } from './pendenciatipo-edit/pendenciatipo-edit.component';
import { PendenciaTipoCreateComponent } from './pendenciatipo-create/pendenciatipo-create.component';
import { PendenciaTipoDetailsComponent } from './pendenciatipo-details/pendenciatipo-details.component';

import { PendenciaTipoFieldCreateComponent } from './pendenciatipo-field-create/pendenciatipo-field-create.component';
import { PendenciaTipoFieldEditComponent } from './pendenciatipo-field-edit/pendenciatipo-field-edit.component';

import { PendenciaTipoContainerCreateComponent } from './pendenciatipo-container-create/pendenciatipo-container-create.component';
import { PendenciaTipoContainerEditComponent } from './pendenciatipo-container-edit/pendenciatipo-container-edit.component';

import { PendenciaTipoPrintModule } from './pendenciatipo-print/pendenciatipo-print.module';
import { PendenciaTipoRoutingModule } from './pendenciatipo.routing.module';

import { PendenciaTipoService } from './pendenciatipo.service';
import { PendenciaTipoServiceFields } from './pendenciatipo.service.fields';

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
        PendenciaTipoRoutingModule,
        PendenciaTipoPrintModule
    ],
    declarations: [
        PendenciaTipoComponent,
		PendenciaTipoContainerFilterComponent,
		PendenciaTipoFieldFilterComponent,
        PendenciaTipoEditComponent,
		PendenciaTipoCreateComponent,
		PendenciaTipoDetailsComponent,
		PendenciaTipoFieldCreateComponent,
		PendenciaTipoFieldEditComponent,
		PendenciaTipoContainerCreateComponent,
		PendenciaTipoContainerEditComponent
    ],
    providers: [PendenciaTipoService,PendenciaTipoServiceFields, ApiService, GlobalService],
})
export class PendenciaTipoModule {


}