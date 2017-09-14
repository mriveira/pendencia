import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { UsuarioTipoComponent } from './usuariotipo.component';

import { UsuarioTipoContainerFilterComponent } from './usuariotipo-container-filter/usuariotipo-container-filter.component';
import { UsuarioTipoFieldFilterComponent } from './usuariotipo-field-filter/usuariotipo-field-filter.component';

import { UsuarioTipoEditComponent } from './usuariotipo-edit/usuariotipo-edit.component';
import { UsuarioTipoCreateComponent } from './usuariotipo-create/usuariotipo-create.component';
import { UsuarioTipoDetailsComponent } from './usuariotipo-details/usuariotipo-details.component';

import { UsuarioTipoFieldCreateComponent } from './usuariotipo-field-create/usuariotipo-field-create.component';
import { UsuarioTipoFieldEditComponent } from './usuariotipo-field-edit/usuariotipo-field-edit.component';

import { UsuarioTipoContainerCreateComponent } from './usuariotipo-container-create/usuariotipo-container-create.component';
import { UsuarioTipoContainerEditComponent } from './usuariotipo-container-edit/usuariotipo-container-edit.component';

import { UsuarioTipoPrintModule } from './usuariotipo-print/usuariotipo-print.module';
import { UsuarioTipoRoutingModule } from './usuariotipo.routing.module';

import { UsuarioTipoService } from './usuariotipo.service';
import { UsuarioTipoServiceFields } from './usuariotipo.service.fields';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        UsuarioTipoRoutingModule,
        UsuarioTipoPrintModule
    ],
    declarations: [
        UsuarioTipoComponent,
		UsuarioTipoContainerFilterComponent,
		UsuarioTipoFieldFilterComponent,
        UsuarioTipoEditComponent,
		UsuarioTipoCreateComponent,
		UsuarioTipoDetailsComponent,
		UsuarioTipoFieldCreateComponent,
		UsuarioTipoFieldEditComponent,
		UsuarioTipoContainerCreateComponent,
		UsuarioTipoContainerEditComponent
    ],
    providers: [UsuarioTipoService,UsuarioTipoServiceFields, ApiService],
})
export class UsuarioTipoModule {


}