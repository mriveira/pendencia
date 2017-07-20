import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcompanhadoresComponent } from './acompanhadores.component';
import { AcompanhadoresEditComponent } from './acompanhadores-edit/acompanhadores-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AcompanhadoresComponent },
            { path: 'edit/:id', component: AcompanhadoresEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AcompanhadoresRoutingModule {

}