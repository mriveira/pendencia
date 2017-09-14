import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientePrintComponent } from './cliente-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ClientePrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  ClientePrintRoutingModule {

}