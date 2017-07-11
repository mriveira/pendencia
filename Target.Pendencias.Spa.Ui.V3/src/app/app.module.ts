import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'app/common/services/auth.service'
import { ApiService } from 'app/common/services/api.service';
import { FluxoTrabalhoStatusService } from './target-main/fluxo-trabalho-status/fluxo-trabalho-status.service';

import { AppComponent } from './app.component';
import { TargetMainComponent } from './target-main/target-main.component';

@NgModule({
    declarations: [
        AppComponent,
        TargetMainComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    providers: [AuthService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
