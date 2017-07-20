import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendeciaPrioridadePrintComponent } from './pendeciaprioridade-print.component';
import { PendeciaPrioridadePrintRoutingModule } from './pendeciaprioridade-print.routing.module';

import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';
import { ApiService } from 'app/common/services/api.service';

import { PendeciaPrioridadeDetailsComponent } from '../pendeciaprioridade-details/pendeciaprioridade-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendeciaPrioridadePrintRoutingModule,
    ],
    declarations: [
        PendeciaPrioridadePrintComponent,
        PendeciaPrioridadeDetailsComponent
    ],
    providers: [PendeciaPrioridadeService, ApiService],
    exports: [PendeciaPrioridadeDetailsComponent]
})
export class PendeciaPrioridadePrintModule {

}
