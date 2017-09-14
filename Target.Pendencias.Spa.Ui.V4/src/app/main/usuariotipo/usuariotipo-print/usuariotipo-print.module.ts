import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioTipoPrintComponent } from './usuariotipo-print.component';
import { UsuarioTipoPrintRoutingModule } from './usuariotipo-print.routing.module';

import { UsuarioTipoService } from '../usuariotipo.service';
import { ApiService } from 'app/common/services/api.service';
import { UsuarioTipoServiceFields } from '../usuariotipo.service.fields';

import { UsuarioTipoContainerDetailsComponent } from '../usuariotipo-container-details/usuariotipo-container-details.component';
import { UsuarioTipoFieldDetailsComponent } from '../usuariotipo-field-details/usuariotipo-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        UsuarioTipoPrintRoutingModule,
    ],
    declarations: [
        UsuarioTipoPrintComponent,
        UsuarioTipoContainerDetailsComponent,
		UsuarioTipoFieldDetailsComponent
    ],
    providers: [UsuarioTipoService, ApiService, UsuarioTipoServiceFields],
    exports: [UsuarioTipoContainerDetailsComponent,UsuarioTipoFieldDetailsComponent]
})
export class UsuarioTipoPrintModule {

}
