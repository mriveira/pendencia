import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { UsuarioTipoComponent } from './usuariotipo.component';
import { UsuarioTipoEditComponent } from './usuariotipo-edit/usuariotipo-edit.component';
import { UsuarioTipoFieldCreateComponent } from './usuariotipo-field-create/usuariotipo-field-create.component';
import { UsuarioTipoFieldEditComponent } from './usuariotipo-field-edit/usuariotipo-field-edit.component';
import { UsuarioTipoFilterComponent } from './usuariotipo-filter/usuariotipo-filter.component';
import { UsuarioTipoPrintModule } from './usuariotipo-print/usuariotipo-print.module';
import { UsuarioTipoRoutingModule } from './usuariotipo.routing.module';
import { UsuarioTipoService } from './usuariotipo.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        UsuarioTipoRoutingModule,
        UsuarioTipoPrintModule
    ],
    declarations: [
        UsuarioTipoComponent,
        UsuarioTipoEditComponent,
		UsuarioTipoFieldCreateComponent,
		UsuarioTipoFieldEditComponent,
        UsuarioTipoFilterComponent,
    ],
    providers: [UsuarioTipoService, ApiService],
})
export class UsuarioTipoModule {



}