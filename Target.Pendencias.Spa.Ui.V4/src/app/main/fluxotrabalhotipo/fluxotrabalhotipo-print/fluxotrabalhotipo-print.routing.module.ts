import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoTrabalhoTipoPrintComponent } from './fluxotrabalhotipo-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FluxoTrabalhoTipoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  FluxoTrabalhoTipoPrintRoutingModule {

}