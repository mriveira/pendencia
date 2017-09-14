import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { TimesheetComponent } from './timesheet.component';
import { TimesheetRoutingModule } from './timesheet.routing.module';
import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';
import { PendenciaService } from '../pendencia/pendencia.service';
import { PendenciaServiceFields } from '../pendencia/pendencia.service.fields';
import { PendenciaTemposService } from '../pendenciatempos/pendenciatempos.service';
import { PendenciaTemposServiceFields } from '../pendenciatempos/pendenciatempos.service.fields';
import { ComentarioService } from '../comentario/comentario.service';
import { ComentarioServiceFields } from '../comentario/comentario.service.fields';


import { TimesheetModalComponent } from './timesheet-modal/timesheet-modal.component';
import { PararModalComponent } from './parar-modal/parar-modal.component';
import { ConcluirModalComponent } from './concluir-modal/concluir-modal.component';
import { ComentarModalComponent } from './comentar-modal/comentar-modal.component';
import { HistoricoModalComponent } from './historico-modal/historico-modal.component';
import { ReclassificarModalComponent } from './reclassificar-modal/reclassificar-modal.component';
import { DetalhesModalComponent } from './detalhes-modal/detalhes-modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        CommonSharedModule,
        TimesheetRoutingModule
    ],
    declarations: [
        TimesheetComponent,
        TimesheetModalComponent,
        PararModalComponent,
        ConcluirModalComponent,
        ComentarModalComponent,
        HistoricoModalComponent,
        ReclassificarModalComponent,
        DetalhesModalComponent
    ],
    providers: [ApiService, PendenciaService, PendenciaServiceFields, PendenciaTemposService, PendenciaTemposServiceFields, ComentarioService, ComentarioServiceFields],
})
export class TimesheetModule {


}