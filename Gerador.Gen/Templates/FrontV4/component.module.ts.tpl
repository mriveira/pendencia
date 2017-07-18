import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { <#className#>Component } from './<#classNameLowerAndSeparator#>.component';
import { <#className#>EditComponent } from './<#classNameLowerAndSeparator#>-edit/<#classNameLowerAndSeparator#>-edit.component';
import { <#className#>FieldComponent } from './<#classNameLowerAndSeparator#>-field/<#classNameLowerAndSeparator#>-field.component';
import { <#className#>FilterComponent } from './<#classNameLowerAndSeparator#>-filter/<#classNameLowerAndSeparator#>-filter.component';
import { <#className#>PrintModule } from './<#classNameLowerAndSeparator#>-print/<#classNameLowerAndSeparator#>-print.module';
import { <#className#>RoutingModule } from './<#classNameLowerAndSeparator#>.routing.module';
import { <#className#>Service } from './<#classNameLowerAndSeparator#>.service';

import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';
import { ApiService } from 'app/common/services/api.service';
import { MakeSelectComponent } from 'app/common/components/select.component';
import { MakePaginationComponent } from 'app/common/components/pagination.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
         <#className#>ServiceRoutingModule,
         <#className#>ServicePrintModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [
        <#className#>Component,
        <#className#>EditComponent,
		<#className#>FieldComponent,
        <#className#>FilterComponent,
        MakeSelectComponent,
        MakePaginationComponent,
        ConfirmModalComponent
    ],
    providers: [FluxoTrabalhoStatusService, ApiService, ConfirmModalComponent],
})
export class <#className#>Module {



}