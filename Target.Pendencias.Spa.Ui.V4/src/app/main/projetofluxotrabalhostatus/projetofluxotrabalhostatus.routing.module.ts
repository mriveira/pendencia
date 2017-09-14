import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetoFluxoTrabalhoStatusComponent } from './projetofluxotrabalhostatus.component';
import { ProjetoFluxoTrabalhoStatusEditComponent } from './projetofluxotrabalhostatus-edit/projetofluxotrabalhostatus-edit.component';
import { ProjetoFluxoTrabalhoStatusDetailsComponent } from './projetofluxotrabalhostatus-details/projetofluxotrabalhostatus-details.component';
import { ProjetoFluxoTrabalhoStatusCreateComponent } from './projetofluxotrabalhostatus-create/projetofluxotrabalhostatus-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProjetoFluxoTrabalhoStatusComponent },
            { path: 'edit/:id', component: ProjetoFluxoTrabalhoStatusEditComponent },
			{ path: 'details/:id', component: ProjetoFluxoTrabalhoStatusDetailsComponent },
			{ path: 'create', component: ProjetoFluxoTrabalhoStatusCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProjetoFluxoTrabalhoStatusRoutingModule {

}