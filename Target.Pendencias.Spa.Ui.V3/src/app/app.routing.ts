import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TargetMainComponent } from './target-main/target-main.component';
import { LoginComponent } from './login/login.component';


const APP_ROUTES: Routes = [
    { path: '', component: TargetMainComponent },
    { path: 'home', component: TargetMainComponent },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: TargetMainComponent, children: [

            { path: 'fluxotrabalhostatus', loadChildren: './target-main/fluxo-trabalho-status/fluxo-trabalho-status.module#FluxoTrabalhoStatusModule' },
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
