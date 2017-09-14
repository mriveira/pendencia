import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendeciaPrioridadePrintComponent } from './pendeciaprioridade-print.component';
import { PendeciaPrioridadePrintRoutingModule } from './pendeciaprioridade-print.routing.module';

import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';
import { ApiService } from 'app/common/services/api.service';
import { PendeciaPrioridadeServiceFields } from '../pendeciaprioridade.service.fields';

import { PendeciaPrioridadeContainerDetailsComponent } from '../pendeciaprioridade-container-details/pendeciaprioridade-container-details.component';
import { PendeciaPrioridadeFieldDetailsComponent } from '../pendeciaprioridade-field-details/pendeciaprioridade-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendeciaPrioridadePrintRoutingModule,
    ],
    declarations: [
        PendeciaPrioridadePrintComponent,
        PendeciaPrioridadeContainerDetailsComponent,
		PendeciaPrioridadeFieldDetailsComponent
    ],
    providers: [PendeciaPrioridadeService, ApiService, PendeciaPrioridadeServiceFields],
    exports: [PendeciaPrioridadeContainerDetailsComponent,PendeciaPrioridadeFieldDetailsComponent]
})
export class PendeciaPrioridadePrintModule {

}
