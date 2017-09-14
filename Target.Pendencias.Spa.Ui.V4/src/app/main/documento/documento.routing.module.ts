import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentoComponent } from './documento.component';
import { DocumentoEditComponent } from './documento-edit/documento-edit.component';
import { DocumentoDetailsComponent } from './documento-details/documento-details.component';
import { DocumentoCreateComponent } from './documento-create/documento-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DocumentoComponent },
            { path: 'edit/:id', component: DocumentoEditComponent },
			{ path: 'details/:id', component: DocumentoDetailsComponent },
			{ path: 'create', component: DocumentoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class DocumentoRoutingModule {

}