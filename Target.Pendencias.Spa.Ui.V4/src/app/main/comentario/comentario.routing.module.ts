import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComentarioComponent } from './comentario.component';
import { ComentarioEditComponent } from './comentario-edit/comentario-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ComentarioComponent },
            { path: 'edit/:id', component: ComentarioEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ComentarioRoutingModule {

}