import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetoDocumentoComponent } from './projetodocumento.component';
import { ProjetoDocumentoEditComponent } from './projetodocumento-edit/projetodocumento-edit.component';
import { ProjetoDocumentoDetailsComponent } from './projetodocumento-details/projetodocumento-details.component';
import { ProjetoDocumentoCreateComponent } from './projetodocumento-create/projetodocumento-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProjetoDocumentoComponent },
            { path: 'edit/:id', component: ProjetoDocumentoEditComponent },
			{ path: 'details/:id', component: ProjetoDocumentoDetailsComponent },
			{ path: 'create', component: ProjetoDocumentoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProjetoDocumentoRoutingModule {

}