import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <#className#>PrintComponent } from './<#classNameLowerAndSeparator#>-print.component';
import { <#className#>PrintRoutingModule } from './<#classNameLowerAndSeparator#>-print.routing.module';

import { <#className#>Service } from '../<#classNameLowerAndSeparator#>.service';
import { ApiService } from 'app/common/services/api.service';

import { <#className#>DetailsComponent } from '../<#classNameLowerAndSeparator#>-details/<#classNameLowerAndSeparator#>-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
		CommonSharedModule,
        <#className#>PrintRoutingModule,
    ],
    declarations: [
        <#className#>PrintComponent,
        <#className#>DetailsComponent
    ],
    providers: [<#className#>Service, ApiService],
    exports: [<#className#>DetailsComponent]
})
export class <#className#>PrintModule {

}
