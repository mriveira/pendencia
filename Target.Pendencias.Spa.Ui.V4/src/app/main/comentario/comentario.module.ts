import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ComentarioComponent } from './comentario.component';
import { ComentarioEditComponent } from './comentario-edit/comentario-edit.component';
import { ComentarioFieldCreateComponent } from './comentario-field-create/comentario-field-create.component';
import { ComentarioFieldEditComponent } from './comentario-field-edit/comentario-field-edit.component';
import { ComentarioFilterComponent } from './comentario-filter/comentario-filter.component';
import { ComentarioPrintModule } from './comentario-print/comentario-print.module';
import { ComentarioRoutingModule } from './comentario.routing.module';
import { ComentarioService } from './comentario.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        ComentarioRoutingModule,
        ComentarioPrintModule
    ],
    declarations: [
        ComentarioComponent,
        ComentarioEditComponent,
		ComentarioFieldCreateComponent,
		ComentarioFieldEditComponent,
        ComentarioFilterComponent,
    ],
    providers: [ComentarioService, ApiService],
})
export class ComentarioModule {



}