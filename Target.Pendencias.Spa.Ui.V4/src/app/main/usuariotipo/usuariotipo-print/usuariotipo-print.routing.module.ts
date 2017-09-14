import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioTipoPrintComponent } from './usuariotipo-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: UsuarioTipoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  UsuarioTipoPrintRoutingModule {

}