import { NgModule } from '@angular/core';

import { FluxoTrabalhoStatusRoutingModule } from './routing/fluxotrabalhostatus-routing.module';

import { SharedModule } from './../../common/shared.module';

import { FluxoTrabalhoStatusComponent } from './fluxotrabalhostatus.component';
import { FluxoTrabalhoStatusDeleteComponent } from './delete/fluxotrabalhostatus-delete.component';
import { FluxoTrabalhoStatusSaveComponent } from './save/fluxotrabalhostatus-save.component';
import { FluxoTrabalhoStatusFilterComponent } from './filter/fluxotrabalhostatus-filter.component';
import { FluxoTrabalhoStatusGridComponent } from './grid/fluxotrabalhostatus-grid.component';

@NgModule({
    imports: [
        SharedModule,
        FluxoTrabalhoStatusRoutingModule,
    ],
    declarations: [
        FluxoTrabalhoStatusComponent,
        FluxoTrabalhoStatusFilterComponent,
        FluxoTrabalhoStatusGridComponent,
        FluxoTrabalhoStatusDeleteComponent,
        FluxoTrabalhoStatusSaveComponent]
})
export class FluxoTrabalhoStatusModule { }
