import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioPrintComponent } from './usuario-print.component';
import { UsuarioPrintRoutingModule } from './usuario-print.routing.module';

import { UsuarioService } from '../usuario.service';
import { ApiService } from 'app/common/services/api.service';

import { UsuarioDetailsComponent } from '../usuario-details/usuario-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        UsuarioPrintRoutingModule,
    ],
    declarations: [
        UsuarioPrintComponent,
        UsuarioDetailsComponent
    ],
    providers: [UsuarioService, ApiService],
    exports: [UsuarioDetailsComponent]
})
export class UsuarioPrintModule {

}
