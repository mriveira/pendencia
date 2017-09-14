import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaEventosComponent } from './pendenciaeventos.component';
import { PendenciaEventosEditComponent } from './pendenciaeventos-edit/pendenciaeventos-edit.component';
import { PendenciaEventosDetailsComponent } from './pendenciaeventos-details/pendenciaeventos-details.component';
import { PendenciaEventosCreateComponent } from './pendenciaeventos-create/pendenciaeventos-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaEventosComponent },
            { path: 'edit/:id', component: PendenciaEventosEditComponent },
			{ path: 'details/:id', component: PendenciaEventosDetailsComponent },
			{ path: 'create', component: PendenciaEventosCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaEventosRoutingModule {

}