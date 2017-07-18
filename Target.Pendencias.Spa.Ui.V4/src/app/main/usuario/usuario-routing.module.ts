import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: UsuarioComponent },
            { path: 'edit/:id', component: UsuarioEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class UsuarioRoutingModule {

}