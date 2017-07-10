import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoTrabalhoStatusComponent } from './fluxo-trabalho-status.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: FluxoTrabalhoStatusComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class FluxoTrabalhoStatusRoutingModule {

}