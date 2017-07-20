import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComentarioDocumentoPrintComponent } from './comentariodocumento-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ComentarioDocumentoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  ComentarioDocumentoPrintRoutingModule {

}