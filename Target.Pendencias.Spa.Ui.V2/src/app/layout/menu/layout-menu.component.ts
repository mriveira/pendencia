import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../common/auth/auth.service';
import { GlobalVariableService } from './../../global.module';

@Component({
    selector: 'layout-menu',
    templateUrl: './layout-menu.component.html',
})
export class LayoutMenuComponent implements OnInit {

    @Output() completeMenu = new EventEmitter();
    @Input() menuOpen: boolean;
    vm: any;

    constructor(private account: AuthService) {
        this.vm = {};
    }

    ngOnInit() {

        this.account.menu((result) => {

            if (result.data != null) {
                if (result.data.name != null) {
                    this.vm.userName = result.data.name
                }

                if (result.data.role != null) {
                    this.vm.userRole = result.data.typerole
                }

                if (result.data.tools != null) {
                    this.vm.menu = JSON.parse(result.data.tools)
                }

                this.vm.userInfo = "Usuário logado: " + this.vm.userName + " [" + this.vm.userRole + "]"
                this.completeMenu.emit({ userInfo: this.vm.userInfo });
            }

        });
    }

}
