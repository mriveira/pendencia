import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination'
import { ModalModule } from 'ngx-bootstrap/modal';

import { BindCustomComponent } from './components/bind-custom.component';
import { MakeSelectComponent } from './components/select.component';
import { MakePaginationComponent } from 'app/common/components/pagination.component';
import { ConfirmModalComponent } from 'app/common/components/confirm-modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        BindCustomComponent,
        MakeSelectComponent,
        MakePaginationComponent,
        ConfirmModalComponent
    ],
    providers: [],
    exports: [BindCustomComponent,
        MakeSelectComponent,
        MakePaginationComponent,
        ConfirmModalComponent]
})
export class CommonSharedModule {

}
