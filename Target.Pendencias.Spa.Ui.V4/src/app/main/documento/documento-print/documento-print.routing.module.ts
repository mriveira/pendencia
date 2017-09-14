import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentoPrintComponent } from './documento-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DocumentoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  DocumentoPrintRoutingModule {

}