import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaDocumentoPrintComponent } from './pendenciadocumento-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaDocumentoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  PendenciaDocumentoPrintRoutingModule {

}