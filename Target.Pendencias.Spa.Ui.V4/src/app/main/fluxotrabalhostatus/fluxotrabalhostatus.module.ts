import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { FluxoTrabalhoStatusComponent } from './fluxotrabalhostatus.component';
import { FluxoTrabalhoStatusEditComponent } from './fluxotrabalhostatus-edit/fluxotrabalhostatus-edit.component';
import { FluxoTrabalhoStatusFieldCreateComponent } from './fluxotrabalhostatus-field-create/fluxotrabalhostatus-field-create.component';
import { FluxoTrabalhoStatusFieldEditComponent } from './fluxotrabalhostatus-field-edit/fluxotrabalhostatus-field-edit.component';
import { FluxoTrabalhoStatusFilterComponent } from './fluxotrabalhostatus-filter/fluxotrabalhostatus-filter.component';
import { FluxoTrabalhoStatusPrintModule } from './fluxotrabalhostatus-print/fluxotrabalhostatus-print.module';
import { FluxoTrabalhoStatusRoutingModule } from './fluxotrabalhostatus.routing.module';
import { FluxoTrabalhoStatusService } from './fluxotrabalhostatus.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        FluxoTrabalhoStatusRoutingModule,
        FluxoTrabalhoStatusPrintModule
    ],
    declarations: [
        FluxoTrabalhoStatusComponent,
        FluxoTrabalhoStatusEditComponent,
		FluxoTrabalhoStatusFieldCreateComponent,
		FluxoTrabalhoStatusFieldEditComponent,
        FluxoTrabalhoStatusFilterComponent,
    ],
    providers: [FluxoTrabalhoStatusService, ApiService],
})
export class FluxoTrabalhoStatusModule {



}