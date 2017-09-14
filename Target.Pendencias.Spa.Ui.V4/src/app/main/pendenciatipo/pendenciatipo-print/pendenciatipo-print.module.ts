import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaTipoPrintComponent } from './pendenciatipo-print.component';
import { PendenciaTipoPrintRoutingModule } from './pendenciatipo-print.routing.module';

import { PendenciaTipoService } from '../pendenciatipo.service';
import { ApiService } from 'app/common/services/api.service';
import { PendenciaTipoServiceFields } from '../pendenciatipo.service.fields';

import { PendenciaTipoContainerDetailsComponent } from '../pendenciatipo-container-details/pendenciatipo-container-details.component';
import { PendenciaTipoFieldDetailsComponent } from '../pendenciatipo-field-details/pendenciatipo-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaTipoPrintRoutingModule,
    ],
    declarations: [
        PendenciaTipoPrintComponent,
        PendenciaTipoContainerDetailsComponent,
		PendenciaTipoFieldDetailsComponent
    ],
    providers: [PendenciaTipoService, ApiService, PendenciaTipoServiceFields],
    exports: [PendenciaTipoContainerDetailsComponent,PendenciaTipoFieldDetailsComponent]
})
export class PendenciaTipoPrintModule {

}
