import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AcompanhadoresComponent } from './acompanhadores.component';

import { AcompanhadoresContainerFilterComponent } from './acompanhadores-container-filter/acompanhadores-container-filter.component';
import { AcompanhadoresFieldFilterComponent } from './acompanhadores-field-filter/acompanhadores-field-filter.component';

import { AcompanhadoresEditComponent } from './acompanhadores-edit/acompanhadores-edit.component';
import { AcompanhadoresCreateComponent } from './acompanhadores-create/acompanhadores-create.component';
import { AcompanhadoresDetailsComponent } from './acompanhadores-details/acompanhadores-details.component';

import { AcompanhadoresFieldCreateComponent } from './acompanhadores-field-create/acompanhadores-field-create.component';
import { AcompanhadoresFieldEditComponent } from './acompanhadores-field-edit/acompanhadores-field-edit.component';

import { AcompanhadoresContainerCreateComponent } from './acompanhadores-container-create/acompanhadores-container-create.component';
import { AcompanhadoresContainerEditComponent } from './acompanhadores-container-edit/acompanhadores-container-edit.component';

import { AcompanhadoresPrintModule } from './acompanhadores-print/acompanhadores-print.module';
import { AcompanhadoresRoutingModule } from './acompanhadores.routing.module';

import { AcompanhadoresService } from './acompanhadores.service';
import { AcompanhadoresServiceFields } from './acompanhadores.service.fields';

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
		AcompanhadoresContainerFilterComponent,
		AcompanhadoresFieldFilterComponent,
        AcompanhadoresEditComponent,
		AcompanhadoresCreateComponent,
		AcompanhadoresDetailsComponent,
		AcompanhadoresFieldCreateComponent,
		AcompanhadoresFieldEditComponent,
		AcompanhadoresContainerCreateComponent,
		AcompanhadoresContainerEditComponent
    ],
    providers: [AcompanhadoresService,AcompanhadoresServiceFields, ApiService],
})
export class AcompanhadoresModule {


}