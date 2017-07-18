import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { UsuarioComponent } from './usuario.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioFieldComponent } from './usuario-field/usuario-field.component';
import { UsuarioFilterComponent } from './usuario-filter/usuario-filter.component';
import { UsuarioPrintModule } from './usuario-print/usuario-print.module';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioService } from './usuario.service';

import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';
import { ApiService } from 'app/common/services/api.service';
import { MakeSelectComponent } from 'app/common/components/select.component';
import { MakePaginationComponent } from 'app/common/components/pagination.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
         UsuarioServiceRoutingModule,
         UsuarioServicePrintModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [
        UsuarioComponent,
        UsuarioEditComponent,
		UsuarioFieldComponent,
        UsuarioFilterComponent,
        MakeSelectComponent,
        MakePaginationComponent,
        ConfirmModalComponent
    ],
    providers: [FluxoTrabalhoStatusService, ApiService, ConfirmModalComponent],
})
export class UsuarioModule {



}