import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ModalModule } from '@ng-bootstrap/ng-bootstrap';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { TargetMainComponent } from './target-main/target-main.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'app/common/services/auth.service'
import { ApiService } from 'app/common/services/api.service';


@NgModule({
    declarations: [
        AppComponent,
        TargetMainComponent,
        LoginComponent  
    ],
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        ModalModule.forRoot()
    ],
    providers: [AuthService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
