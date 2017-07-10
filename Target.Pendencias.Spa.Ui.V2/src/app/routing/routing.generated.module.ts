import { Routes } from '@angular/router';

export const routesGenerated: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './views/dashboard/dashboard.module#DashboardModule' },
    { path: 'fluxotrabalhostatus', loadChildren: './views/fluxotrabalhostatus/fluxotrabalhostatus.module#FluxoTrabalhoStatusModule' },
];
