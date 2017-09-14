import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetoComponent } from './projeto.component';
import { ProjetoEditComponent } from './projeto-edit/projeto-edit.component';
import { ProjetoDetailsComponent } from './projeto-details/projeto-details.component';
import { ProjetoCreateComponent } from './projeto-create/projeto-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProjetoComponent },
            { path: 'edit/:id', component: ProjetoEditComponent },
			{ path: 'details/:id', component: ProjetoDetailsComponent },
			{ path: 'create', component: ProjetoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProjetoRoutingModule {

}