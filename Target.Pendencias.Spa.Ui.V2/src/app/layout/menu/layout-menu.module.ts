import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMenuComponent } from './layout-menu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [LayoutMenuComponent],
    exports: [LayoutMenuComponent],
})
export class LayoutMenuModule { }
