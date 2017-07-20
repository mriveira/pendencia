import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientePrintComponent } from './cliente-print.component';
import { ClientePrintRoutingModule } from './cliente-print.routing.module';

import { ClienteService } from '../cliente.service';
import { ApiService } from 'app/common/services/api.service';

import { ClienteDetailsComponent } from '../cliente-details/cliente-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ClientePrintRoutingModule,
    ],
    declarations: [
        ClientePrintComponent,
        ClienteDetailsComponent
    ],
    providers: [ClienteService, ApiService],
    exports: [ClienteDetailsComponent]
})
export class ClientePrintModule {

}
