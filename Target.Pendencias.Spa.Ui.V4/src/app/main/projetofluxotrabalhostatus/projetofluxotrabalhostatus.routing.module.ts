import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetoFluxoTrabalhoStatusComponent } from './projetofluxotrabalhostatus.component';
import { ProjetoFluxoTrabalhoStatusEditComponent } from './projetofluxotrabalhostatus-edit/projetofluxotrabalhostatus-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProjetoFluxoTrabalhoStatusComponent },
            { path: 'edit/:id', component: ProjetoFluxoTrabalhoStatusEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProjetoFluxoTrabalhoStatusRoutingModule {

}