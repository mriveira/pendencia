import { GlobalVariableService } from './../../global.module';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../common/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})
export class LoginComponent implements OnInit {

    error: string;
    success: string;

    constructor(private account: AuthService) {

    }

   
    ngOnInit() {

        this.account.processTokenCallback();
        this.account.loginSso();
    }

    executeLogin() {
        this.error = null;
        this.success = null;
        
       
    }

}
