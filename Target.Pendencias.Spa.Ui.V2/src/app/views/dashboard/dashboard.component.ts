import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth/auth.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    providers: [AuthService]
})

export class DashboardComponent implements OnInit {

    constructor(private account: AuthService) {
    }

    ngOnInit() {



    }

}
