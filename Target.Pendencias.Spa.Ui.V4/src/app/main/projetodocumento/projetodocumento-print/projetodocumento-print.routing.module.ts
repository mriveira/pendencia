import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetoDocumentoPrintComponent } from './projetodocumento-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProjetoDocumentoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  ProjetoDocumentoPrintRoutingModule {

}