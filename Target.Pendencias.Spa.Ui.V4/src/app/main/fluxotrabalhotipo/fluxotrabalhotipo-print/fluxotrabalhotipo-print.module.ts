import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoTrabalhoTipoPrintComponent } from './fluxotrabalhotipo-print.component';
import { FluxoTrabalhoTipoPrintRoutingModule } from './fluxotrabalhotipo-print.routing.module';

import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';
import { ApiService } from 'app/common/services/api.service';

import { FluxoTrabalhoTipoDetailsComponent } from '../fluxotrabalhotipo-details/fluxotrabalhotipo-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        FluxoTrabalhoTipoPrintRoutingModule,
    ],
    declarations: [
        FluxoTrabalhoTipoPrintComponent,
        FluxoTrabalhoTipoDetailsComponent
    ],
    providers: [FluxoTrabalhoTipoService, ApiService],
    exports: [FluxoTrabalhoTipoDetailsComponent]
})
export class FluxoTrabalhoTipoPrintModule {

}
