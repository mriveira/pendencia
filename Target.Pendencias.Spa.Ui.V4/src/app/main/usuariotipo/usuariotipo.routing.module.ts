import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioTipoComponent } from './usuariotipo.component';
import { UsuarioTipoEditComponent } from './usuariotipo-edit/usuariotipo-edit.component';
import { UsuarioTipoDetailsComponent } from './usuariotipo-details/usuariotipo-details.component';
import { UsuarioTipoCreateComponent } from './usuariotipo-create/usuariotipo-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: UsuarioTipoComponent },
            { path: 'edit/:id', component: UsuarioTipoEditComponent },
			{ path: 'details/:id', component: UsuarioTipoDetailsComponent },
			{ path: 'create', component: UsuarioTipoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class UsuarioTipoRoutingModule {

}