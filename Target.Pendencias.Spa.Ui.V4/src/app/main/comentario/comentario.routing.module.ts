import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComentarioComponent } from './comentario.component';
import { ComentarioEditComponent } from './comentario-edit/comentario-edit.component';
import { ComentarioDetailsComponent } from './comentario-details/comentario-details.component';
import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ComentarioComponent },
            { path: 'edit/:id', component: ComentarioEditComponent },
			{ path: 'details/:id', component: ComentarioDetailsComponent },
			{ path: 'create', component: ComentarioCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ComentarioRoutingModule {

}