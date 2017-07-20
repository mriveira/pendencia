import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcompanhadoresPrintComponent } from './acompanhadores-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AcompanhadoresPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  AcompanhadoresPrintRoutingModule {

}