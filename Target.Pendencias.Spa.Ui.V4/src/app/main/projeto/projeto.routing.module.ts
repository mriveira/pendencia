import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetoComponent } from './projeto.component';
import { ProjetoEditComponent } from './projeto-edit/projeto-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProjetoComponent },
            { path: 'edit/:id', component: ProjetoEditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProjetoRoutingModule {

}