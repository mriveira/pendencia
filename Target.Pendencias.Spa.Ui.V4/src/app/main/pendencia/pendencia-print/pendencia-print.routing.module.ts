import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaPrintComponent } from './pendencia-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  PendenciaPrintRoutingModule {

}