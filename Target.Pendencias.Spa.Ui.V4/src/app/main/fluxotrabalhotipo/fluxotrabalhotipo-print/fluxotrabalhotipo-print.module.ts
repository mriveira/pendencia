import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoTrabalhoTipoPrintComponent } from './fluxotrabalhotipo-print.component';
import { FluxoTrabalhoTipoPrintRoutingModule } from './fluxotrabalhotipo-print.routing.module';

import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';
import { ApiService } from 'app/common/services/api.service';
import { FluxoTrabalhoTipoServiceFields } from '../fluxotrabalhotipo.service.fields';

import { FluxoTrabalhoTipoContainerDetailsComponent } from '../fluxotrabalhotipo-container-details/fluxotrabalhotipo-container-details.component';
import { FluxoTrabalhoTipoFieldDetailsComponent } from '../fluxotrabalhotipo-field-details/fluxotrabalhotipo-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        FluxoTrabalhoTipoPrintRoutingModule,
    ],
    declarations: [
        FluxoTrabalhoTipoPrintComponent,
        FluxoTrabalhoTipoContainerDetailsComponent,
		FluxoTrabalhoTipoFieldDetailsComponent
    ],
    providers: [FluxoTrabalhoTipoService, ApiService, FluxoTrabalhoTipoServiceFields],
    exports: [FluxoTrabalhoTipoContainerDetailsComponent,FluxoTrabalhoTipoFieldDetailsComponent]
})
export class FluxoTrabalhoTipoPrintModule {

}
