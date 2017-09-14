import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComentarioPrintComponent } from './comentario-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ComentarioPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  ComentarioPrintRoutingModule {

}