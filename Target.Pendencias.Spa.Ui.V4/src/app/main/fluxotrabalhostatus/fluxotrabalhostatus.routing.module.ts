import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoTrabalhoStatusComponent } from './fluxotrabalhostatus.component';
import { FluxoTrabalhoStatusEditComponent } from './fluxotrabalhostatus-edit/fluxotrabalhostatus-edit.component';
import { FluxoTrabalhoStatusDetailsComponent } from './fluxotrabalhostatus-details/fluxotrabalhostatus-details.component';
import { FluxoTrabalhoStatusCreateComponent } from './fluxotrabalhostatus-create/fluxotrabalhostatus-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FluxoTrabalhoStatusComponent },
            { path: 'edit/:id', component: FluxoTrabalhoStatusEditComponent },
			{ path: 'details/:id', component: FluxoTrabalhoStatusDetailsComponent },
			{ path: 'create', component: FluxoTrabalhoStatusCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class FluxoTrabalhoStatusRoutingModule {

}