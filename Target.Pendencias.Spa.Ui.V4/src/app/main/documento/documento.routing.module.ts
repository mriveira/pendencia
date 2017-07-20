import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentoComponent } from './documento.component';
import { DocumentoEditComponent } from './documento-edit/documento-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DocumentoComponent },
            { path: 'edit/:id', component: DocumentoEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class DocumentoRoutingModule {

}