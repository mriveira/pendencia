import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AcompanhadoresComponent } from './acompanhadores.component';
import { AcompanhadoresEditComponent } from './acompanhadores-edit/acompanhadores-edit.component';
import { AcompanhadoresFieldCreateComponent } from './acompanhadores-field-create/acompanhadores-field-create.component';
import { AcompanhadoresFieldEditComponent } from './acompanhadores-field-edit/acompanhadores-field-edit.component';
import { AcompanhadoresFilterComponent } from './acompanhadores-filter/acompanhadores-filter.component';
import { AcompanhadoresPrintModule } from './acompanhadores-print/acompanhadores-print.module';
import { AcompanhadoresRoutingModule } from './acompanhadores.routing.module';
import { AcompanhadoresService } from './acompanhadores.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        AcompanhadoresRoutingModule,
        AcompanhadoresPrintModule
    ],
    declarations: [
        AcompanhadoresComponent,
        AcompanhadoresEditComponent,
		AcompanhadoresFieldCreateComponent,
		AcompanhadoresFieldEditComponent,
        AcompanhadoresFilterComponent,
    ],
    providers: [AcompanhadoresService, ApiService],
})
export class AcompanhadoresModule {



}