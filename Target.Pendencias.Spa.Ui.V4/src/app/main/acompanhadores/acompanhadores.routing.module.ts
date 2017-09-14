import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcompanhadoresComponent } from './acompanhadores.component';
import { AcompanhadoresEditComponent } from './acompanhadores-edit/acompanhadores-edit.component';
import { AcompanhadoresDetailsComponent } from './acompanhadores-details/acompanhadores-details.component';
import { AcompanhadoresCreateComponent } from './acompanhadores-create/acompanhadores-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AcompanhadoresComponent },
            { path: 'edit/:id', component: AcompanhadoresEditComponent },
			{ path: 'details/:id', component: AcompanhadoresDetailsComponent },
			{ path: 'create', component: AcompanhadoresCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AcompanhadoresRoutingModule {

}