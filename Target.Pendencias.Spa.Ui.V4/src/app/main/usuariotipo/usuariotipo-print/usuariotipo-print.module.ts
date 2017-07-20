import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioTipoPrintComponent } from './usuariotipo-print.component';
import { UsuarioTipoPrintRoutingModule } from './usuariotipo-print.routing.module';

import { UsuarioTipoService } from '../usuariotipo.service';
import { ApiService } from 'app/common/services/api.service';

import { UsuarioTipoDetailsComponent } from '../usuariotipo-details/usuariotipo-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        UsuarioTipoPrintRoutingModule,
    ],
    declarations: [
        UsuarioTipoPrintComponent,
        UsuarioTipoDetailsComponent
    ],
    providers: [UsuarioTipoService, ApiService],
    exports: [UsuarioTipoDetailsComponent]
})
export class UsuarioTipoPrintModule {

}
