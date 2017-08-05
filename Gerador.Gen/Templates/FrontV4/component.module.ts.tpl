﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { <#className#>Component } from './<#classNameLowerAndSeparator#>.component';
import { <#className#>FilterComponent } from './<#classNameLowerAndSeparator#>-filter/<#classNameLowerAndSeparator#>-filter.component';

import { <#className#>EditComponent } from './<#classNameLowerAndSeparator#>-edit/<#classNameLowerAndSeparator#>-edit.component';
import { <#className#>CreateComponent } from './<#classNameLowerAndSeparator#>-create/<#classNameLowerAndSeparator#>-create.component';
import { <#className#>DetailsComponent } from './<#classNameLowerAndSeparator#>-details/<#classNameLowerAndSeparator#>-details.component';

import { <#className#>FieldCreateComponent } from './<#classNameLowerAndSeparator#>-field-create/<#classNameLowerAndSeparator#>-field-create.component';
import { <#className#>FieldEditComponent } from './<#classNameLowerAndSeparator#>-field-edit/<#classNameLowerAndSeparator#>-field-edit.component';

import { <#className#>ContainerCreateComponent } from './<#classNameLowerAndSeparator#>-container-create/<#classNameLowerAndSeparator#>-container-create.component';
import { <#className#>ContainerEditComponent } from './<#classNameLowerAndSeparator#>-container-edit/<#classNameLowerAndSeparator#>-container-edit.component';

import { <#className#>PrintModule } from './<#classNameLowerAndSeparator#>-print/<#classNameLowerAndSeparator#>-print.module';
import { <#className#>RoutingModule } from './<#classNameLowerAndSeparator#>.routing.module';

import { <#className#>Service } from './<#classNameLowerAndSeparator#>.service';
import { <#className#>ServiceFields } from './<#classNameLowerAndSeparator#>.service.fields';

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
		<#className#>FilterComponent,
        <#className#>EditComponent,
		<#className#>CreateComponent,
		<#className#>DetailsComponent,
		<#className#>FieldCreateComponent,
		<#className#>FieldEditComponent,
		<#className#>ContainerCreateComponent,
		<#className#>ContainerEditComponent
    ],
    providers: [<#className#>Service,<#className#>ServiceFields, ApiService],
})
export class <#className#>Module {



}