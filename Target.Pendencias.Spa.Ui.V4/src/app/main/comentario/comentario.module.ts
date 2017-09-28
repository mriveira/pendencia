import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ComentarioComponent } from './comentario.component';

import { ComentarioContainerFilterComponent } from './comentario-container-filter/comentario-container-filter.component';
import { ComentarioFieldFilterComponent } from './comentario-field-filter/comentario-field-filter.component';

import { ComentarioEditComponent } from './comentario-edit/comentario-edit.component';
import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';
import { ComentarioDetailsComponent } from './comentario-details/comentario-details.component';

import { ComentarioFieldCreateComponent } from './comentario-field-create/comentario-field-create.component';
import { ComentarioFieldEditComponent } from './comentario-field-edit/comentario-field-edit.component';

import { ComentarioContainerCreateComponent } from './comentario-container-create/comentario-container-create.component';
import { ComentarioContainerEditComponent } from './comentario-container-edit/comentario-container-edit.component';

import { ComentarioPrintModule } from './comentario-print/comentario-print.module';
import { ComentarioRoutingModule } from './comentario.routing.module';

import { ComentarioService } from './comentario.service';
import { ComentarioServiceFields } from './comentario.service.fields';

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
		ComentarioContainerFilterComponent,
		ComentarioFieldFilterComponent,
        ComentarioEditComponent,
		ComentarioCreateComponent,
		ComentarioDetailsComponent,
		ComentarioFieldCreateComponent,
		ComentarioFieldEditComponent,
		ComentarioContainerCreateComponent,
		ComentarioContainerEditComponent
    ],
    providers: [ComentarioService,ComentarioServiceFields, ApiService],
})
export class ComentarioModule {


}