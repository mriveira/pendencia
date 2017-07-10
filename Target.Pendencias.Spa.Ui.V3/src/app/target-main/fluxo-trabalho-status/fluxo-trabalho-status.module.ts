import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FluxoTrabalhoStatusRoutingModule } from './fluxo-trabalho-status.routing.module';
import { FluxoTrabalhoStatusComponent } from './fluxo-trabalho-status.component';
import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';
import { MakeSelectComponent } from 'app/common/components/select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FluxoTrabalhoStatusRoutingModule
    ],
    declarations: [
        FluxoTrabalhoStatusComponent,
        MakeSelectComponent
    ],
    providers: [FluxoTrabalhoStatusService],
})
export class FluxoTrabalhoStatusModule {



}