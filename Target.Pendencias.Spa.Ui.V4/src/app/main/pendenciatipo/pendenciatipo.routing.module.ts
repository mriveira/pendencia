import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaTipoComponent } from './pendenciatipo.component';
import { PendenciaTipoEditComponent } from './pendenciatipo-edit/pendenciatipo-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaTipoComponent },
            { path: 'edit/:id', component: PendenciaTipoEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaTipoRoutingModule {

}