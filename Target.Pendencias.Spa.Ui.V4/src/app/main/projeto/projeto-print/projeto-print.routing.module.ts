import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetoPrintComponent } from './projeto-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProjetoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  ProjetoPrintRoutingModule {

}