import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BurndownComponent } from './burndown.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: BurndownComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class BurndownRoutingModule {

}