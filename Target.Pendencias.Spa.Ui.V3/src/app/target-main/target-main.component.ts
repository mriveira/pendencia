import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/common/services/auth.service'

@Component({
    selector: 'app-target-main',
    templateUrl: './target-main.component.html',
    styleUrls: ['./target-main.component.css']
})
export class TargetMainComponent implements OnInit {

    vm: any;
    menuIsOpen: boolean;
    constructor(private authService: AuthService) {
        this.vm = {};
        this.menuIsOpen = true;
    }

    ngOnInit() {
        this.authService.menu((result) => {

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
            }

        });
    }

    onToggleMenu() {

        this.menuIsOpen = !this.menuIsOpen
    }

}
