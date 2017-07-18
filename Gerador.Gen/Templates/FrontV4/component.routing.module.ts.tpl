import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { <#className#>Component } from './<#classNameLowerAndSeparator#>.component';
import { <#className#>EditComponent } from './<#classNameLowerAndSeparator#>-edit/<#classNameLowerAndSeparator#>-edit.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: <#className#>Component },
            { path: 'edit/:id', component: <#className#>EditComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class <#className#>RoutingModule {

}