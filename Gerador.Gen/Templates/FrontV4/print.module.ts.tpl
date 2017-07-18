import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <#className#>PrintComponent } from './<#classNameLowerAndSeparator#>-print.component';
import { <#className#>PrintRoutingModule } from './<#classNameLowerAndSeparator#>-print.routing.module';

import { <#className#>Service } from '../<#classNameLowerAndSeparator#>.service';
import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';
import { ApiService } from 'app/common/services/api.service';

import { <#className#>DetailsComponent } from '../<#classNameLowerAndSeparator#>-details/<#classNameLowerAndSeparator#>-details.component';
import { BindCustomComponent } from 'app/common/components/bind-custom.component';

@NgModule({
    imports: [
        CommonModule,
        <#className#>PrintRoutingModule,
    ],
    declarations: [
        <#className#>PrintComponent,
        <#className#>DetailsComponent,
        BindCustomComponent,
    ],
    providers: [<#className#>Service, ApiService, ConfirmModalComponent],
    exports: [<#className#>DetailsComponent, BindCustomComponent]
})
export class <#className#>PrintModule {

}
