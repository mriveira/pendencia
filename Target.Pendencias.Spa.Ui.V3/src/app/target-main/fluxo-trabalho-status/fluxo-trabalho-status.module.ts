import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoStatusPrintComponent } from './fluxo-trabalho-status-print/fluxo-trabalho-status-print.component';
import { FluxoTrabalhoStatusComponent } from './fluxo-trabalho-status.component';
import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';
import { MakeSelectComponent } from 'app/common/components/select.component';
import { BindCustomComponent } from 'app/common/components/bind-custom.component';
import { FluxoTrabalhoStatusRoutingModule } from './fluxo-trabalho-status.routing.module';


import { ApiService } from 'app/common/services/api.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FluxoTrabalhoStatusRoutingModule,
        ModalModule.forRoot(),
       
    ],
    declarations: [
        FluxoTrabalhoStatusComponent,
        FluxoTrabalhoStatusPrintComponent,
        MakeSelectComponent,  
        BindCustomComponent
    ],
    providers: [FluxoTrabalhoStatusService, ApiService],
})
export class FluxoTrabalhoStatusModule {



}