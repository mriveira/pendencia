import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoFluxoTrabalhoStatusPrintComponent } from './projetofluxotrabalhostatus-print.component';
import { ProjetoFluxoTrabalhoStatusPrintRoutingModule } from './projetofluxotrabalhostatus-print.routing.module';

import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';
import { ApiService } from 'app/common/services/api.service';
import { ProjetoFluxoTrabalhoStatusServiceFields } from '../projetofluxotrabalhostatus.service.fields';

import { ProjetoFluxoTrabalhoStatusContainerDetailsComponent } from '../projetofluxotrabalhostatus-container-details/projetofluxotrabalhostatus-container-details.component';
import { ProjetoFluxoTrabalhoStatusFieldDetailsComponent } from '../projetofluxotrabalhostatus-field-details/projetofluxotrabalhostatus-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ProjetoFluxoTrabalhoStatusPrintRoutingModule,
    ],
    declarations: [
        ProjetoFluxoTrabalhoStatusPrintComponent,
        ProjetoFluxoTrabalhoStatusContainerDetailsComponent,
		ProjetoFluxoTrabalhoStatusFieldDetailsComponent
    ],
    providers: [ProjetoFluxoTrabalhoStatusService, ApiService, ProjetoFluxoTrabalhoStatusServiceFields],
    exports: [ProjetoFluxoTrabalhoStatusContainerDetailsComponent,ProjetoFluxoTrabalhoStatusFieldDetailsComponent]
})
export class ProjetoFluxoTrabalhoStatusPrintModule {

}
