import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComentarioDocumentoComponent } from './comentariodocumento.component';
import { ComentarioDocumentoEditComponent } from './comentariodocumento-edit/comentariodocumento-edit.component';
import { ComentarioDocumentoDetailsComponent } from './comentariodocumento-details/comentariodocumento-details.component';
import { ComentarioDocumentoCreateComponent } from './comentariodocumento-create/comentariodocumento-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ComentarioDocumentoComponent },
            { path: 'edit/:id', component: ComentarioDocumentoEditComponent },
			{ path: 'details/:id', component: ComentarioDocumentoDetailsComponent },
			{ path: 'create', component: ComentarioDocumentoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ComentarioDocumentoRoutingModule {

}