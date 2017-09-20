import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoTipoComponent } from './fluxotrabalhotipo.component';

import { FluxoTrabalhoTipoContainerFilterComponent } from './fluxotrabalhotipo-container-filter/fluxotrabalhotipo-container-filter.component';
import { FluxoTrabalhoTipoFieldFilterComponent } from './fluxotrabalhotipo-field-filter/fluxotrabalhotipo-field-filter.component';

import { FluxoTrabalhoTipoEditComponent } from './fluxotrabalhotipo-edit/fluxotrabalhotipo-edit.component';
import { FluxoTrabalhoTipoCreateComponent } from './fluxotrabalhotipo-create/fluxotrabalhotipo-create.component';
import { FluxoTrabalhoTipoDetailsComponent } from './fluxotrabalhotipo-details/fluxotrabalhotipo-details.component';

import { FluxoTrabalhoTipoFieldCreateComponent } from './fluxotrabalhotipo-field-create/fluxotrabalhotipo-field-create.component';
import { FluxoTrabalhoTipoFieldEditComponent } from './fluxotrabalhotipo-field-edit/fluxotrabalhotipo-field-edit.component';

import { FluxoTrabalhoTipoContainerCreateComponent } from './fluxotrabalhotipo-container-create/fluxotrabalhotipo-container-create.component';
import { FluxoTrabalhoTipoContainerEditComponent } from './fluxotrabalhotipo-container-edit/fluxotrabalhotipo-container-edit.component';

import { FluxoTrabalhoTipoPrintModule } from './fluxotrabalhotipo-print/fluxotrabalhotipo-print.module';
import { FluxoTrabalhoTipoRoutingModule } from './fluxotrabalhotipo.routing.module';

import { FluxoTrabalhoTipoService } from './fluxotrabalhotipo.service';
import { FluxoTrabalhoTipoServiceFields } from './fluxotrabalhotipo.service.fields';

import { ApiService } from 'app/common/services/api.service';
import { GlobalService } from '../../global.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        FluxoTrabalhoTipoRoutingModule,
        FluxoTrabalhoTipoPrintModule
    ],
    declarations: [
        FluxoTrabalhoTipoComponent,
		FluxoTrabalhoTipoContainerFilterComponent,
		FluxoTrabalhoTipoFieldFilterComponent,
        FluxoTrabalhoTipoEditComponent,
		FluxoTrabalhoTipoCreateComponent,
		FluxoTrabalhoTipoDetailsComponent,
		FluxoTrabalhoTipoFieldCreateComponent,
		FluxoTrabalhoTipoFieldEditComponent,
		FluxoTrabalhoTipoContainerCreateComponent,
		FluxoTrabalhoTipoContainerEditComponent
    ],
    providers: [FluxoTrabalhoTipoService,FluxoTrabalhoTipoServiceFields, ApiService, GlobalService],
})
export class FluxoTrabalhoTipoModule {


}