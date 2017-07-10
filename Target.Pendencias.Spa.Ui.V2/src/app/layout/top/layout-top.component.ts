import { AuthService } from './../../common/auth/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalVariableService } from './../../global.module';

@Component({
    selector: 'layout-top',
    templateUrl: './layout-top.component.html',
    providers: [AuthService]
})
export class LayoutTopComponent {

    @Output() changeMenu: EventEmitter<string> = new EventEmitter<string>();

    @Input() menuOpen: boolean;

    @Input() userInfo: any;


    toggleMenu() {
        this.changeMenu.emit();
    }

    constructor(private account: AuthService) {

       
    }

    executeLogout() {
        this.account.logout();
    }
}
