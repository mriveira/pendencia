import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioTipoComponent } from './usuariotipo.component';
import { UsuarioTipoEditComponent } from './usuariotipo-edit/usuariotipo-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: UsuarioTipoComponent },
            { path: 'edit/:id', component: UsuarioTipoEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class UsuarioTipoRoutingModule {

}