import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComentarioDocumentoComponent } from './comentariodocumento.component';
import { ComentarioDocumentoEditComponent } from './comentariodocumento-edit/comentariodocumento-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ComentarioDocumentoComponent },
            { path: 'edit/:id', component: ComentarioDocumentoEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ComentarioDocumentoRoutingModule {

}