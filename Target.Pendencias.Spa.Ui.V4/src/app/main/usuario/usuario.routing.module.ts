import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: UsuarioComponent },
            { path: 'edit/:id', component: UsuarioEditComponent },
			{ path: 'details/:id', component: UsuarioDetailsComponent },
			{ path: 'create', component: UsuarioCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class UsuarioRoutingModule {

}