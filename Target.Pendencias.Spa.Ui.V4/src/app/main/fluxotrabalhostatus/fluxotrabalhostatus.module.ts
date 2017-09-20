import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoStatusComponent } from './fluxotrabalhostatus.component';

import { FluxoTrabalhoStatusContainerFilterComponent } from './fluxotrabalhostatus-container-filter/fluxotrabalhostatus-container-filter.component';
import { FluxoTrabalhoStatusFieldFilterComponent } from './fluxotrabalhostatus-field-filter/fluxotrabalhostatus-field-filter.component';

import { FluxoTrabalhoStatusEditComponent } from './fluxotrabalhostatus-edit/fluxotrabalhostatus-edit.component';
import { FluxoTrabalhoStatusCreateComponent } from './fluxotrabalhostatus-create/fluxotrabalhostatus-create.component';
import { FluxoTrabalhoStatusDetailsComponent } from './fluxotrabalhostatus-details/fluxotrabalhostatus-details.component';

import { FluxoTrabalhoStatusFieldCreateComponent } from './fluxotrabalhostatus-field-create/fluxotrabalhostatus-field-create.component';
import { FluxoTrabalhoStatusFieldEditComponent } from './fluxotrabalhostatus-field-edit/fluxotrabalhostatus-field-edit.component';

import { FluxoTrabalhoStatusContainerCreateComponent } from './fluxotrabalhostatus-container-create/fluxotrabalhostatus-container-create.component';
import { FluxoTrabalhoStatusContainerEditComponent } from './fluxotrabalhostatus-container-edit/fluxotrabalhostatus-container-edit.component';

import { FluxoTrabalhoStatusPrintModule } from './fluxotrabalhostatus-print/fluxotrabalhostatus-print.module';
import { FluxoTrabalhoStatusRoutingModule } from './fluxotrabalhostatus.routing.module';

import { FluxoTrabalhoStatusService } from './fluxotrabalhostatus.service';
import { FluxoTrabalhoStatusServiceFields } from './fluxotrabalhostatus.service.fields';

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
        FluxoTrabalhoStatusRoutingModule,
        FluxoTrabalhoStatusPrintModule
    ],
    declarations: [
        FluxoTrabalhoStatusComponent,
		FluxoTrabalhoStatusContainerFilterComponent,
		FluxoTrabalhoStatusFieldFilterComponent,
        FluxoTrabalhoStatusEditComponent,
		FluxoTrabalhoStatusCreateComponent,
		FluxoTrabalhoStatusDetailsComponent,
		FluxoTrabalhoStatusFieldCreateComponent,
		FluxoTrabalhoStatusFieldEditComponent,
		FluxoTrabalhoStatusContainerCreateComponent,
		FluxoTrabalhoStatusContainerEditComponent
    ],
    providers: [FluxoTrabalhoStatusService,FluxoTrabalhoStatusServiceFields, ApiService, GlobalService],
})
export class FluxoTrabalhoStatusModule {


}