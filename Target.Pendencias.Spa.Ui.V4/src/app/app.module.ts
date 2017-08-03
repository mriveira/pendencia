import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { routingDefault } from './app.routing';
import { routingCustom } from './app.custom.routing';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'app/common/services/auth.service'
import { ApiService } from 'app/common/services/api.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoadingComponent } from './common/components/loading.component';


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        routingDefault,
        routingCustom,
        SimpleNotificationsModule.forRoot()
    ],
    providers: [
        AuthService,
        ApiService,
        { provide: LOCALE_ID, useValue: "pt-BR" }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
