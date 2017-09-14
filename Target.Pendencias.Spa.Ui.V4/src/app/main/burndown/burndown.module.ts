import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts';

import { BurndownComponent } from './burndown.component';
import { BurndownRoutingModule } from './burndown.routing.module';
import { ApiService } from 'app/common/services/api.service';
import { ProjetoService } from '../projeto/projeto.service';
import { ProjetoServiceFields } from '../projeto/projeto.service.fields';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        CommonSharedModule,
        BurndownRoutingModule,
        ChartsModule
    ],
    declarations: [
        BurndownComponent,
    ],
    providers: [ApiService, ProjetoService, ProjetoServiceFields],
})
export class BurndownModule {


}