import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaEventosPrintComponent } from './pendenciaeventos-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaEventosPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  PendenciaEventosPrintRoutingModule {

}