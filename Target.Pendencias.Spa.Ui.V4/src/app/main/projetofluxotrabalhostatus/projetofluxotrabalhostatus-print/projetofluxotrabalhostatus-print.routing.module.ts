import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetoFluxoTrabalhoStatusPrintComponent } from './projetofluxotrabalhostatus-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProjetoFluxoTrabalhoStatusPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  ProjetoFluxoTrabalhoStatusPrintRoutingModule {

}