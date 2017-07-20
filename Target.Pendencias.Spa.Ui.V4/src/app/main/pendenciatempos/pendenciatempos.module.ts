import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PendenciaTemposComponent } from './pendenciatempos.component';
import { PendenciaTemposEditComponent } from './pendenciatempos-edit/pendenciatempos-edit.component';
import { PendenciaTemposFieldCreateComponent } from './pendenciatempos-field-create/pendenciatempos-field-create.component';
import { PendenciaTemposFieldEditComponent } from './pendenciatempos-field-edit/pendenciatempos-field-edit.component';
import { PendenciaTemposFilterComponent } from './pendenciatempos-filter/pendenciatempos-filter.component';
import { PendenciaTemposPrintModule } from './pendenciatempos-print/pendenciatempos-print.module';
import { PendenciaTemposRoutingModule } from './pendenciatempos.routing.module';
import { PendenciaTemposService } from './pendenciatempos.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        PendenciaTemposRoutingModule,
        PendenciaTemposPrintModule
    ],
    declarations: [
        PendenciaTemposComponent,
        PendenciaTemposEditComponent,
		PendenciaTemposFieldCreateComponent,
		PendenciaTemposFieldEditComponent,
        PendenciaTemposFilterComponent,
    ],
    providers: [PendenciaTemposService, ApiService],
})
export class PendenciaTemposModule {



}