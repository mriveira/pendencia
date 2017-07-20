import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PendeciaPrioridadeComponent } from './pendeciaprioridade.component';
import { PendeciaPrioridadeEditComponent } from './pendeciaprioridade-edit/pendeciaprioridade-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PendeciaPrioridadeComponent },
            { path: 'edit/:id', component: PendeciaPrioridadeEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class PendeciaPrioridadeRoutingModule {

}