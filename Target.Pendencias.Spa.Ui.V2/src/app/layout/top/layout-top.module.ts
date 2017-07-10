import { AuthService } from './../../common/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTopComponent } from 'app/layout/top/layout-top.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LayoutTopComponent],
    exports: [LayoutTopComponent],
})
export class LayoutTopModule {

}
