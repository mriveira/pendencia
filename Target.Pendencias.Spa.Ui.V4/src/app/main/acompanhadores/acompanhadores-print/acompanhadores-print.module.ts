import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcompanhadoresPrintComponent } from './acompanhadores-print.component';
import { AcompanhadoresPrintRoutingModule } from './acompanhadores-print.routing.module';

import { AcompanhadoresService } from '../acompanhadores.service';
import { ApiService } from 'app/common/services/api.service';

import { AcompanhadoresDetailsComponent } from '../acompanhadores-details/acompanhadores-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        AcompanhadoresPrintRoutingModule,
    ],
    declarations: [
        AcompanhadoresPrintComponent,
        AcompanhadoresDetailsComponent
    ],
    providers: [AcompanhadoresService, ApiService],
    exports: [AcompanhadoresDetailsComponent]
})
export class AcompanhadoresPrintModule {

}
