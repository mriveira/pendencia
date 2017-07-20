import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ClienteComponent },
            { path: 'edit/:id', component: ClienteEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ClienteRoutingModule {

}