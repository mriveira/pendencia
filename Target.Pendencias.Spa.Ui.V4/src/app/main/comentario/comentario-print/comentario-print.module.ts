import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioPrintComponent } from './comentario-print.component';
import { ComentarioPrintRoutingModule } from './comentario-print.routing.module';

import { ComentarioService } from '../comentario.service';
import { ApiService } from 'app/common/services/api.service';

import { ComentarioDetailsComponent } from '../comentario-details/comentario-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ComentarioPrintRoutingModule,
    ],
    declarations: [
        ComentarioPrintComponent,
        ComentarioDetailsComponent
    ],
    providers: [ComentarioService, ApiService],
    exports: [ComentarioDetailsComponent]
})
export class ComentarioPrintModule {

}
