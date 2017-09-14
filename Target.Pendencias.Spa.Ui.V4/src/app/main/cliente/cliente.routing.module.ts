import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ClienteComponent },
            { path: 'edit/:id', component: ClienteEditComponent },
			{ path: 'details/:id', component: ClienteDetailsComponent },
			{ path: 'create', component: ClienteCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ClienteRoutingModule {

}