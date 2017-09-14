import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientePrintComponent } from './cliente-print.component';
import { ClientePrintRoutingModule } from './cliente-print.routing.module';

import { ClienteService } from '../cliente.service';
import { ApiService } from 'app/common/services/api.service';
import { ClienteServiceFields } from '../cliente.service.fields';

import { ClienteContainerDetailsComponent } from '../cliente-container-details/cliente-container-details.component';
import { ClienteFieldDetailsComponent } from '../cliente-field-details/cliente-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ClientePrintRoutingModule,
    ],
    declarations: [
        ClientePrintComponent,
        ClienteContainerDetailsComponent,
		ClienteFieldDetailsComponent
    ],
    providers: [ClienteService, ApiService, ClienteServiceFields],
    exports: [ClienteContainerDetailsComponent,ClienteFieldDetailsComponent]
})
export class ClientePrintModule {

}
