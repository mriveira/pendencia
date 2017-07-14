import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: MainComponent },
    { path: 'home', component: MainComponent },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: MainComponent, children: [

            { path: 'fluxotrabalhostatus', loadChildren: './main/fluxo-trabalho-status/fluxo-trabalho-status.module#FluxoTrabalhoStatusModule' },
        ]
    },
    { path: 'fluxotrabalhostatus/print/:id', loadChildren: './main/fluxo-trabalho-status/fluxo-trabalho-status-print/fluxo-trabalho-status-print.module#FluxoTrabalhoStatusPrintModule' },

]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
