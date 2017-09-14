import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendenciaTipoComponent } from './pendenciatipo.component';
import { PendenciaTipoEditComponent } from './pendenciatipo-edit/pendenciatipo-edit.component';
import { PendenciaTipoDetailsComponent } from './pendenciatipo-details/pendenciatipo-details.component';
import { PendenciaTipoCreateComponent } from './pendenciatipo-create/pendenciatipo-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendenciaTipoComponent },
            { path: 'edit/:id', component: PendenciaTipoEditComponent },
			{ path: 'details/:id', component: PendenciaTipoDetailsComponent },
			{ path: 'create', component: PendenciaTipoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendenciaTipoRoutingModule {

}