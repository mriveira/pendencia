import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaTemposComponent } from './pendenciatempos.component';
import { PendenciaTemposEditComponent } from './pendenciatempos-edit/pendenciatempos-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaTemposComponent },
            { path: 'edit/:id', component: PendenciaTemposEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaTemposRoutingModule {

}