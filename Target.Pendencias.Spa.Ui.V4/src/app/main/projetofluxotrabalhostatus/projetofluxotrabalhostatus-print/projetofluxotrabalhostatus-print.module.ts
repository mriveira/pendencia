import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoFluxoTrabalhoStatusPrintComponent } from './projetofluxotrabalhostatus-print.component';
import { ProjetoFluxoTrabalhoStatusPrintRoutingModule } from './projetofluxotrabalhostatus-print.routing.module';

import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';
import { ApiService } from 'app/common/services/api.service';

import { ProjetoFluxoTrabalhoStatusDetailsComponent } from '../projetofluxotrabalhostatus-details/projetofluxotrabalhostatus-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ProjetoFluxoTrabalhoStatusPrintRoutingModule,
    ],
    declarations: [
        ProjetoFluxoTrabalhoStatusPrintComponent,
        ProjetoFluxoTrabalhoStatusDetailsComponent
    ],
    providers: [ProjetoFluxoTrabalhoStatusService, ApiService],
    exports: [ProjetoFluxoTrabalhoStatusDetailsComponent]
})
export class ProjetoFluxoTrabalhoStatusPrintModule {

}
