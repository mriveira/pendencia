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

            { path: 'pendencia', loadChildren: './main/pendencia/pendencia.module#PendenciaModule' },
        ]
    },
    { path: 'pendencia/print/:id', loadChildren: './main/pendencia/pendencia-print/pendencia-print.module#PendenciaPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'fluxotrabalhostatus', loadChildren: './main/fluxotrabalhostatus/fluxotrabalhostatus.module#FluxoTrabalhoStatusModule' },
        ]
    },
    { path: 'fluxotrabalhostatus/print/:id', loadChildren: './main/fluxotrabalhostatus/fluxotrabalhostatus-print/fluxotrabalhostatus-print.module#FluxoTrabalhoStatusPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'fluxotrabalhotipo', loadChildren: './main/fluxotrabalhotipo/fluxotrabalhotipo.module#FluxoTrabalhoTipoModule' },
        ]
    },
    { path: 'fluxotrabalhotipo/print/:id', loadChildren: './main/fluxotrabalhotipo/fluxotrabalhotipo-print/fluxotrabalhotipo-print.module#FluxoTrabalhoTipoPrintModule' },



]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
