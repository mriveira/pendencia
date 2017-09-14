import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoTrabalhoStatusPrintComponent } from './fluxotrabalhostatus-print.component';
import { FluxoTrabalhoStatusPrintRoutingModule } from './fluxotrabalhostatus-print.routing.module';

import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';
import { ApiService } from 'app/common/services/api.service';
import { FluxoTrabalhoStatusServiceFields } from '../fluxotrabalhostatus.service.fields';

import { FluxoTrabalhoStatusContainerDetailsComponent } from '../fluxotrabalhostatus-container-details/fluxotrabalhostatus-container-details.component';
import { FluxoTrabalhoStatusFieldDetailsComponent } from '../fluxotrabalhostatus-field-details/fluxotrabalhostatus-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        FluxoTrabalhoStatusPrintRoutingModule,
    ],
    declarations: [
        FluxoTrabalhoStatusPrintComponent,
        FluxoTrabalhoStatusContainerDetailsComponent,
		FluxoTrabalhoStatusFieldDetailsComponent
    ],
    providers: [FluxoTrabalhoStatusService, ApiService, FluxoTrabalhoStatusServiceFields],
    exports: [FluxoTrabalhoStatusContainerDetailsComponent,FluxoTrabalhoStatusFieldDetailsComponent]
})
export class FluxoTrabalhoStatusPrintModule {

}
