import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { UsuarioComponent } from './usuario.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioFieldCreateComponent } from './usuario-field-create/usuario-field-create.component';
import { UsuarioFieldEditComponent } from './usuario-field-edit/usuario-field-edit.component';
import { UsuarioFilterComponent } from './usuario-filter/usuario-filter.component';
import { UsuarioPrintModule } from './usuario-print/usuario-print.module';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioService } from './usuario.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        UsuarioRoutingModule,
        UsuarioPrintModule
    ],
    declarations: [
        UsuarioComponent,
        UsuarioEditComponent,
		UsuarioFieldCreateComponent,
		UsuarioFieldEditComponent,
        UsuarioFilterComponent,
    ],
    providers: [UsuarioService, ApiService],
})
export class UsuarioModule {



}