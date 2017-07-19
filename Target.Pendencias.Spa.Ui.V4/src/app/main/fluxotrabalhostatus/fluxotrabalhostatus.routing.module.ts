import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FluxoTrabalhoStatusComponent } from './fluxotrabalhostatus.component';
import { FluxoTrabalhoStatusEditComponent } from './fluxotrabalhostatus-edit/fluxotrabalhostatus-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FluxoTrabalhoStatusComponent },
            { path: 'edit/:id', component: FluxoTrabalhoStatusEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class FluxoTrabalhoStatusRoutingModule {

}