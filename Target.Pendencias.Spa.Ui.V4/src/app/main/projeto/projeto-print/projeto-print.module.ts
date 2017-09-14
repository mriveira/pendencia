import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoPrintComponent } from './projeto-print.component';
import { ProjetoPrintRoutingModule } from './projeto-print.routing.module';

import { ProjetoService } from '../projeto.service';
import { ApiService } from 'app/common/services/api.service';
import { ProjetoServiceFields } from '../projeto.service.fields';

import { ProjetoContainerDetailsComponent } from '../projeto-container-details/projeto-container-details.component';
import { ProjetoFieldDetailsComponent } from '../projeto-field-details/projeto-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ProjetoPrintRoutingModule,
    ],
    declarations: [
        ProjetoPrintComponent,
        ProjetoContainerDetailsComponent,
		ProjetoFieldDetailsComponent
    ],
    providers: [ProjetoService, ApiService, ProjetoServiceFields],
    exports: [ProjetoContainerDetailsComponent,ProjetoFieldDetailsComponent]
})
export class ProjetoPrintModule {

}
