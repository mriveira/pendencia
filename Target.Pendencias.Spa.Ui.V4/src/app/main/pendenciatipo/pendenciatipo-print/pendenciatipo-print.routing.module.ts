import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaTipoPrintComponent } from './pendenciatipo-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaTipoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  PendenciaTipoPrintRoutingModule {

}