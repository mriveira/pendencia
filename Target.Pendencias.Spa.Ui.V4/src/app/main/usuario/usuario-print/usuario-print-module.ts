import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioPrintComponent } from './usuario-print.component';
import { UsuarioPrintRoutingModule } from './usuario-print.routing.module';

import { UsuarioService } from '../usuario.service';
import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';
import { ApiService } from 'app/common/services/api.service';

import { UsuarioDetailsComponent } from '../usuario-details/usuario-details.component';
import { BindCustomComponent } from 'app/common/components/bind-custom.component';

@NgModule({
    imports: [
        CommonModule,
        UsuarioPrintRoutingModule,
    ],
    declarations: [
        UsuarioPrintComponent,
        UsuarioDetailsComponent,
        BindCustomComponent,
    ],
    providers: [UsuarioService, ApiService, ConfirmModalComponent],
    exports: [UsuarioDetailsComponent, BindCustomComponent]
})
export class UsuarioPrintModule {

}
