import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoTrabalhoStatusPrintComponent } from './fluxotrabalhostatus-print.component';
import { FluxoTrabalhoStatusPrintRoutingModule } from './fluxotrabalhostatus-print.routing.module';

import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';
import { ApiService } from 'app/common/services/api.service';

import { FluxoTrabalhoStatusDetailsComponent } from '../fluxotrabalhostatus-details/fluxotrabalhostatus-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        FluxoTrabalhoStatusPrintRoutingModule,
    ],
    declarations: [
        FluxoTrabalhoStatusPrintComponent,
        FluxoTrabalhoStatusDetailsComponent
    ],
    providers: [FluxoTrabalhoStatusService, ApiService],
    exports: [FluxoTrabalhoStatusDetailsComponent]
})
export class FluxoTrabalhoStatusPrintModule {

}
