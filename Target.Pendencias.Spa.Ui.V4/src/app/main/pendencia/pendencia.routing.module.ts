import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaComponent } from './pendencia.component';
import { PendenciaEditComponent } from './pendencia-edit/pendencia-edit.component';
import { PendenciaDetailsComponent } from './pendencia-details/pendencia-details.component';
import { PendenciaCreateComponent } from './pendencia-create/pendencia-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaComponent },
            { path: 'edit/:id', component: PendenciaEditComponent },
			{ path: 'details/:id', component: PendenciaDetailsComponent },
			{ path: 'create', component: PendenciaCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaRoutingModule {

}