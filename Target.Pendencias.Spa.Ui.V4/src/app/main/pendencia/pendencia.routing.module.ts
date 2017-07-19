import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaComponent } from './pendencia.component';
import { PendenciaEditComponent } from './pendencia-edit/pendencia-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaComponent },
            { path: 'edit/:id', component: PendenciaEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaRoutingModule {

}