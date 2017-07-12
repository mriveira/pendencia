import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoStatusComponent } from './fluxo-trabalho-status.component';
import { FluxoTrabalhoStatusPrintComponent } from './fluxo-trabalho-status-print/fluxo-trabalho-status-print.component';
import { FluxoTrabalhoStatusEditComponent } from './fluxo-trabalho-status-edit/fluxo-trabalho-status-edit.component';

import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';

import { MakeSelectComponent } from 'app/common/components/select.component';
import { BindCustomComponent } from 'app/common/components/bind-custom.component';
import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';

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
        FluxoTrabalhoStatusEditComponent,
        MakeSelectComponent,  
        BindCustomComponent,
        ConfirmModalComponent
    ],
    providers: [FluxoTrabalhoStatusService, ApiService, ConfirmModalComponent],
})
export class FluxoTrabalhoStatusModule {



}