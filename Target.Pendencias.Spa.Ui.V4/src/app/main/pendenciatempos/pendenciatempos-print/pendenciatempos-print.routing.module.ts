import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaTemposPrintComponent } from './pendenciatempos-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaTemposPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  PendenciaTemposPrintRoutingModule {

}