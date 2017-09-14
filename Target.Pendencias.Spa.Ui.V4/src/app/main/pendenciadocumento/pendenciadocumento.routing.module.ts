import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaDocumentoComponent } from './pendenciadocumento.component';
import { PendenciaDocumentoEditComponent } from './pendenciadocumento-edit/pendenciadocumento-edit.component';
import { PendenciaDocumentoDetailsComponent } from './pendenciadocumento-details/pendenciadocumento-details.component';
import { PendenciaDocumentoCreateComponent } from './pendenciadocumento-create/pendenciadocumento-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaDocumentoComponent },
            { path: 'edit/:id', component: PendenciaDocumentoEditComponent },
			{ path: 'details/:id', component: PendenciaDocumentoDetailsComponent },
			{ path: 'create', component: PendenciaDocumentoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaDocumentoRoutingModule {

}