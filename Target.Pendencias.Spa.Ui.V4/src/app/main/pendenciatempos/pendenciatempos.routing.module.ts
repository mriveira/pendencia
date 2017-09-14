import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaTemposComponent } from './pendenciatempos.component';
import { PendenciaTemposEditComponent } from './pendenciatempos-edit/pendenciatempos-edit.component';
import { PendenciaTemposDetailsComponent } from './pendenciatempos-details/pendenciatempos-details.component';
import { PendenciaTemposCreateComponent } from './pendenciatempos-create/pendenciatempos-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaTemposComponent },
            { path: 'edit/:id', component: PendenciaTemposEditComponent },
			{ path: 'details/:id', component: PendenciaTemposDetailsComponent },
			{ path: 'create', component: PendenciaTemposCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaTemposRoutingModule {

}