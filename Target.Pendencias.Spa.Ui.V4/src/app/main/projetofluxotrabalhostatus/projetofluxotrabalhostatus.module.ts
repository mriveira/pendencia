import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ProjetoFluxoTrabalhoStatusComponent } from './projetofluxotrabalhostatus.component';

import { ProjetoFluxoTrabalhoStatusContainerFilterComponent } from './projetofluxotrabalhostatus-container-filter/projetofluxotrabalhostatus-container-filter.component';
import { ProjetoFluxoTrabalhoStatusFieldFilterComponent } from './projetofluxotrabalhostatus-field-filter/projetofluxotrabalhostatus-field-filter.component';

import { ProjetoFluxoTrabalhoStatusEditComponent } from './projetofluxotrabalhostatus-edit/projetofluxotrabalhostatus-edit.component';
import { ProjetoFluxoTrabalhoStatusCreateComponent } from './projetofluxotrabalhostatus-create/projetofluxotrabalhostatus-create.component';
import { ProjetoFluxoTrabalhoStatusDetailsComponent } from './projetofluxotrabalhostatus-details/projetofluxotrabalhostatus-details.component';

import { ProjetoFluxoTrabalhoStatusFieldCreateComponent } from './projetofluxotrabalhostatus-field-create/projetofluxotrabalhostatus-field-create.component';
import { ProjetoFluxoTrabalhoStatusFieldEditComponent } from './projetofluxotrabalhostatus-field-edit/projetofluxotrabalhostatus-field-edit.component';

import { ProjetoFluxoTrabalhoStatusContainerCreateComponent } from './projetofluxotrabalhostatus-container-create/projetofluxotrabalhostatus-container-create.component';
import { ProjetoFluxoTrabalhoStatusContainerEditComponent } from './projetofluxotrabalhostatus-container-edit/projetofluxotrabalhostatus-container-edit.component';

import { ProjetoFluxoTrabalhoStatusPrintModule } from './projetofluxotrabalhostatus-print/projetofluxotrabalhostatus-print.module';
import { ProjetoFluxoTrabalhoStatusRoutingModule } from './projetofluxotrabalhostatus.routing.module';

import { ProjetoFluxoTrabalhoStatusService } from './projetofluxotrabalhostatus.service';
import { ProjetoFluxoTrabalhoStatusServiceFields } from './projetofluxotrabalhostatus.service.fields';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        ProjetoFluxoTrabalhoStatusRoutingModule,
        ProjetoFluxoTrabalhoStatusPrintModule
    ],
    declarations: [
        ProjetoFluxoTrabalhoStatusComponent,
		ProjetoFluxoTrabalhoStatusContainerFilterComponent,
		ProjetoFluxoTrabalhoStatusFieldFilterComponent,
        ProjetoFluxoTrabalhoStatusEditComponent,
		ProjetoFluxoTrabalhoStatusCreateComponent,
		ProjetoFluxoTrabalhoStatusDetailsComponent,
		ProjetoFluxoTrabalhoStatusFieldCreateComponent,
		ProjetoFluxoTrabalhoStatusFieldEditComponent,
		ProjetoFluxoTrabalhoStatusContainerCreateComponent,
		ProjetoFluxoTrabalhoStatusContainerEditComponent
    ],
    providers: [ProjetoFluxoTrabalhoStatusService,ProjetoFluxoTrabalhoStatusServiceFields, ApiService],
})
export class ProjetoFluxoTrabalhoStatusModule {


}