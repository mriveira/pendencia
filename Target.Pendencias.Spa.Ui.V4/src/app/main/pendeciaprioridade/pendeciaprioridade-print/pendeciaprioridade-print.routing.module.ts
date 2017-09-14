import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendeciaPrioridadePrintComponent } from './pendeciaprioridade-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendeciaPrioridadePrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  PendeciaPrioridadePrintRoutingModule {

}