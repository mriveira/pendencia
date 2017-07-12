﻿import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'app/common/services/auth.service'
import { ApiService } from 'app/common/services/api.service';
import { AppComponent } from './app.component';
import { TargetMainComponent } from './target-main/target-main.component';

@NgModule({
    declarations: [
        AppComponent,
        TargetMainComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        routing,
        SimpleNotificationsModule.forRoot()
    ],
    providers: [AuthService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
