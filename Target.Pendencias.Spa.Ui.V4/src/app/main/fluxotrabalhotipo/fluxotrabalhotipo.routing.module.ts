import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoTrabalhoTipoComponent } from './fluxotrabalhotipo.component';
import { FluxoTrabalhoTipoEditComponent } from './fluxotrabalhotipo-edit/fluxotrabalhotipo-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FluxoTrabalhoTipoComponent },
            { path: 'edit/:id', component: FluxoTrabalhoTipoEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class FluxoTrabalhoTipoRoutingModule {

}