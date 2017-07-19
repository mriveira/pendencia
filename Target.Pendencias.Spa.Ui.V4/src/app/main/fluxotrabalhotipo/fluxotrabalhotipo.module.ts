import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoTipoComponent } from './fluxotrabalhotipo.component';
import { FluxoTrabalhoTipoEditComponent } from './fluxotrabalhotipo-edit/fluxotrabalhotipo-edit.component';
import { FluxoTrabalhoTipoFieldCreateComponent } from './fluxotrabalhotipo-field-create/fluxotrabalhotipo-field-create.component';
import { FluxoTrabalhoTipoFieldEditComponent } from './fluxotrabalhotipo-field-edit/fluxotrabalhotipo-field-edit.component';
import { FluxoTrabalhoTipoFilterComponent } from './fluxotrabalhotipo-filter/fluxotrabalhotipo-filter.component';
import { FluxoTrabalhoTipoPrintModule } from './fluxotrabalhotipo-print/fluxotrabalhotipo-print.module';
import { FluxoTrabalhoTipoRoutingModule } from './fluxotrabalhotipo.routing.module';
import { FluxoTrabalhoTipoService } from './fluxotrabalhotipo.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        FluxoTrabalhoTipoRoutingModule,
        FluxoTrabalhoTipoPrintModule
    ],
    declarations: [
        FluxoTrabalhoTipoComponent,
        FluxoTrabalhoTipoEditComponent,
		FluxoTrabalhoTipoFieldCreateComponent,
		FluxoTrabalhoTipoFieldEditComponent,
        FluxoTrabalhoTipoFilterComponent,
    ],
    providers: [FluxoTrabalhoTipoService, ApiService],
})
export class FluxoTrabalhoTipoModule {



}