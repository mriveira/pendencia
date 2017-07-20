import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaDocumentoComponent } from './pendenciadocumento.component';
import { PendenciaDocumentoEditComponent } from './pendenciadocumento-edit/pendenciadocumento-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaDocumentoComponent },
            { path: 'edit/:id', component: PendenciaDocumentoEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaDocumentoRoutingModule {

}