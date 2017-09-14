import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioPrintComponent } from './usuario-print.component';
import { UsuarioPrintRoutingModule } from './usuario-print.routing.module';

import { UsuarioService } from '../usuario.service';
import { ApiService } from 'app/common/services/api.service';
import { UsuarioServiceFields } from '../usuario.service.fields';

import { UsuarioContainerDetailsComponent } from '../usuario-container-details/usuario-container-details.component';
import { UsuarioFieldDetailsComponent } from '../usuario-field-details/usuario-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        UsuarioPrintRoutingModule,
    ],
    declarations: [
        UsuarioPrintComponent,
        UsuarioContainerDetailsComponent,
		UsuarioFieldDetailsComponent
    ],
    providers: [UsuarioService, ApiService, UsuarioServiceFields],
    exports: [UsuarioContainerDetailsComponent,UsuarioFieldDetailsComponent]
})
export class UsuarioPrintModule {

}
