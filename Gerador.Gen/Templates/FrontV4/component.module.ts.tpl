import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { <#className#>Component } from './<#classNameLowerAndSeparator#>.component';
import { <#className#>EditComponent } from './<#classNameLowerAndSeparator#>-edit/<#classNameLowerAndSeparator#>-edit.component';
import { <#className#>FieldCreateComponent } from './<#classNameLowerAndSeparator#>-field-create/<#classNameLowerAndSeparator#>-field-create.component';
import { <#className#>FieldEditComponent } from './<#classNameLowerAndSeparator#>-field-edit/<#classNameLowerAndSeparator#>-field-edit.component';
import { <#className#>FilterComponent } from './<#classNameLowerAndSeparator#>-filter/<#classNameLowerAndSeparator#>-filter.component';
import { <#className#>PrintModule } from './<#classNameLowerAndSeparator#>-print/<#classNameLowerAndSeparator#>-print.module';
import { <#className#>RoutingModule } from './<#classNameLowerAndSeparator#>.routing.module';
import { <#className#>Service } from './<#classNameLowerAndSeparator#>.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
		ReactiveFormsModule,
		ModalModule.forRoot(),
		CommonSharedModule,
        <#className#>RoutingModule,
        <#className#>PrintModule
    ],
    declarations: [
        <#className#>Component,
        <#className#>EditComponent,
		<#className#>FieldCreateComponent,
		<#className#>FieldEditComponent,
        <#className#>FilterComponent,
    ],
    providers: [<#className#>Service, ApiService],
})
export class <#className#>Module {



}