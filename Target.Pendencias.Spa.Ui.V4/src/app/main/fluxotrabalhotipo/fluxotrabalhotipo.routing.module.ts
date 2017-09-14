import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoTrabalhoTipoComponent } from './fluxotrabalhotipo.component';
import { FluxoTrabalhoTipoEditComponent } from './fluxotrabalhotipo-edit/fluxotrabalhotipo-edit.component';
import { FluxoTrabalhoTipoDetailsComponent } from './fluxotrabalhotipo-details/fluxotrabalhotipo-details.component';
import { FluxoTrabalhoTipoCreateComponent } from './fluxotrabalhotipo-create/fluxotrabalhotipo-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FluxoTrabalhoTipoComponent },
            { path: 'edit/:id', component: FluxoTrabalhoTipoEditComponent },
			{ path: 'details/:id', component: FluxoTrabalhoTipoDetailsComponent },
			{ path: 'create', component: FluxoTrabalhoTipoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class FluxoTrabalhoTipoRoutingModule {

}