import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaEventosComponent } from './pendenciaeventos.component';
import { PendenciaEventosEditComponent } from './pendenciaeventos-edit/pendenciaeventos-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaEventosComponent },
            { path: 'edit/:id', component: PendenciaEventosEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaEventosRoutingModule {

}