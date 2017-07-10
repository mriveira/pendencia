import { GlobalVariableService } from './global.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AuthenticatedHttpService } from './common/AuthenticatedHttp.service';

@NgModule({
    declarations: [
        AppComponent,
    ],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        ToastContainerModule.forRoot(),
        FormsModule,
        HttpModule,
        AppRoutingModule,
        LayoutModule,
    ],
    providers: [GlobalVariableService, AuthenticatedHttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }
