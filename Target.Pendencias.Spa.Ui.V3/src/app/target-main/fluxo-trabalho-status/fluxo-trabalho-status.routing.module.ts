import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoTrabalhoStatusComponent } from './fluxo-trabalho-status.component';
import { FluxoTrabalhoStatusPrintComponent } from './fluxo-trabalho-status-print/fluxo-trabalho-status-print.component';
import { FluxoTrabalhoStatusEditComponent } from './fluxo-trabalho-status-edit/fluxo-trabalho-status-edit.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FluxoTrabalhoStatusComponent },
            { path: 'print/:id', component: FluxoTrabalhoStatusPrintComponent },
            { path: 'edit/:id', component: FluxoTrabalhoStatusEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class FluxoTrabalhoStatusRoutingModule {

}