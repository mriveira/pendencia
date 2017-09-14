import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioPrintComponent } from './comentario-print.component';
import { ComentarioPrintRoutingModule } from './comentario-print.routing.module';

import { ComentarioService } from '../comentario.service';
import { ApiService } from 'app/common/services/api.service';
import { ComentarioServiceFields } from '../comentario.service.fields';

import { ComentarioContainerDetailsComponent } from '../comentario-container-details/comentario-container-details.component';
import { ComentarioFieldDetailsComponent } from '../comentario-field-details/comentario-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ComentarioPrintRoutingModule,
    ],
    declarations: [
        ComentarioPrintComponent,
        ComentarioContainerDetailsComponent,
		ComentarioFieldDetailsComponent
    ],
    providers: [ComentarioService, ApiService, ComentarioServiceFields],
    exports: [ComentarioContainerDetailsComponent,ComentarioFieldDetailsComponent]
})
export class ComentarioPrintModule {

}
