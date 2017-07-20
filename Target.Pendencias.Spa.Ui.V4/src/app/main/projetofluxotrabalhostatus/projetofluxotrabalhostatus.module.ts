import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ProjetoFluxoTrabalhoStatusComponent } from './projetofluxotrabalhostatus.component';
import { ProjetoFluxoTrabalhoStatusEditComponent } from './projetofluxotrabalhostatus-edit/projetofluxotrabalhostatus-edit.component';
import { ProjetoFluxoTrabalhoStatusFieldCreateComponent } from './projetofluxotrabalhostatus-field-create/projetofluxotrabalhostatus-field-create.component';
import { ProjetoFluxoTrabalhoStatusFieldEditComponent } from './projetofluxotrabalhostatus-field-edit/projetofluxotrabalhostatus-field-edit.component';
import { ProjetoFluxoTrabalhoStatusFilterComponent } from './projetofluxotrabalhostatus-filter/projetofluxotrabalhostatus-filter.component';
import { ProjetoFluxoTrabalhoStatusPrintModule } from './projetofluxotrabalhostatus-print/projetofluxotrabalhostatus-print.module';
import { ProjetoFluxoTrabalhoStatusRoutingModule } from './projetofluxotrabalhostatus.routing.module';
import { ProjetoFluxoTrabalhoStatusService } from './projetofluxotrabalhostatus.service';

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
        ProjetoFluxoTrabalhoStatusEditComponent,
		ProjetoFluxoTrabalhoStatusFieldCreateComponent,
		ProjetoFluxoTrabalhoStatusFieldEditComponent,
        ProjetoFluxoTrabalhoStatusFilterComponent,
    ],
    providers: [ProjetoFluxoTrabalhoStatusService, ApiService],
})
export class ProjetoFluxoTrabalhoStatusModule {



}