import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendenciaTipoPrintComponent } from './pendenciatipo-print.component';
import { PendenciaTipoPrintRoutingModule } from './pendenciatipo-print.routing.module';

import { PendenciaTipoService } from '../pendenciatipo.service';
import { ApiService } from 'app/common/services/api.service';

import { PendenciaTipoDetailsComponent } from '../pendenciatipo-details/pendenciatipo-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        PendenciaTipoPrintRoutingModule,
    ],
    declarations: [
        PendenciaTipoPrintComponent,
        PendenciaTipoDetailsComponent
    ],
    providers: [PendenciaTipoService, ApiService],
    exports: [PendenciaTipoDetailsComponent]
})
export class PendenciaTipoPrintModule {

}
