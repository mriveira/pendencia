import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendeciaPrioridadeComponent } from './pendeciaprioridade.component';
import { PendeciaPrioridadeEditComponent } from './pendeciaprioridade-edit/pendeciaprioridade-edit.component';
import { PendeciaPrioridadeDetailsComponent } from './pendeciaprioridade-details/pendeciaprioridade-details.component';
import { PendeciaPrioridadeCreateComponent } from './pendeciaprioridade-create/pendeciaprioridade-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendeciaPrioridadeComponent },
            { path: 'edit/:id', component: PendeciaPrioridadeEditComponent },
			{ path: 'details/:id', component: PendeciaPrioridadeDetailsComponent },
			{ path: 'create', component: PendeciaPrioridadeCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendeciaPrioridadeRoutingModule {

}