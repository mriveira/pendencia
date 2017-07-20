import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoPrintComponent } from './projeto-print.component';
import { ProjetoPrintRoutingModule } from './projeto-print.routing.module';

import { ProjetoService } from '../projeto.service';
import { ApiService } from 'app/common/services/api.service';

import { ProjetoDetailsComponent } from '../projeto-details/projeto-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        ProjetoPrintRoutingModule,
    ],
    declarations: [
        ProjetoPrintComponent,
        ProjetoDetailsComponent
    ],
    providers: [ProjetoService, ApiService],
    exports: [ProjetoDetailsComponent]
})
export class ProjetoPrintModule {

}
