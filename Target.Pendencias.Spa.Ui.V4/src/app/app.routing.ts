import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


const APP_ROUTES_DEFAULT: Routes = [

	{
        path: '', component: MainComponent, children: [

            { path: 'pendencia', loadChildren: './main/pendencia/pendencia.module#PendenciaModule' },
            { path: 'usuario', loadChildren: './main/usuario/usuario.module#UsuarioModule' },
            { path: 'acompanhadores', loadChildren: './main/acompanhadores/acompanhadores.module#AcompanhadoresModule' },
            { path: 'cliente', loadChildren: './main/cliente/cliente.module#ClienteModule' },
            { path: 'comentario', loadChildren: './main/comentario/comentario.module#ComentarioModule' },
            { path: 'comentariodocumento', loadChildren: './main/comentariodocumento/comentariodocumento.module#ComentarioDocumentoModule' },
            { path: 'documento', loadChildren: './main/documento/documento.module#DocumentoModule' },
            { path: 'fluxotrabalhostatus', loadChildren: './main/fluxotrabalhostatus/fluxotrabalhostatus.module#FluxoTrabalhoStatusModule' },
            { path: 'fluxotrabalhotipo', loadChildren: './main/fluxotrabalhotipo/fluxotrabalhotipo.module#FluxoTrabalhoTipoModule' },
            { path: 'pendeciaprioridade', loadChildren: './main/pendeciaprioridade/pendeciaprioridade.module#PendeciaPrioridadeModule' },
            { path: 'pendenciaeventos', loadChildren: './main/pendenciaeventos/pendenciaeventos.module#PendenciaEventosModule' },
            { path: 'pendenciadocumento', loadChildren: './main/pendenciadocumento/pendenciadocumento.module#PendenciaDocumentoModule' },
            { path: 'pendenciatipo', loadChildren: './main/pendenciatipo/pendenciatipo.module#PendenciaTipoModule' },
            { path: 'projeto', loadChildren: './main/projeto/projeto.module#ProjetoModule' },
            { path: 'projetofluxotrabalhostatus', loadChildren: './main/projetofluxotrabalhostatus/projetofluxotrabalhostatus.module#ProjetoFluxoTrabalhoStatusModule' },
            { path: 'pendenciatempos', loadChildren: './main/pendenciatempos/pendenciatempos.module#PendenciaTemposModule' },
            { path: 'usuariotipo', loadChildren: './main/usuariotipo/usuariotipo.module#UsuarioTipoModule' },
            { path: 'dashboard/timesheet', loadChildren: './main/timesheet/timesheet.module#TimesheetModule' },
            { path: 'dashboard/burndown', loadChildren: './main/burndown/burndown.module#BurndownModule' }

		    ]
    },

    { path: 'pendencia/print/:id', loadChildren: './main/pendencia/pendencia-print/pendencia-print.module#PendenciaPrintModule' },
    { path: 'usuario/print/:id', loadChildren: './main/usuario/usuario-print/usuario-print.module#UsuarioPrintModule' },
    { path: 'acompanhadores/print/:id', loadChildren: './main/acompanhadores/acompanhadores-print/acompanhadores-print.module#AcompanhadoresPrintModule' },
    { path: 'cliente/print/:id', loadChildren: './main/cliente/cliente-print/cliente-print.module#ClientePrintModule' },
    { path: 'comentario/print/:id', loadChildren: './main/comentario/comentario-print/comentario-print.module#ComentarioPrintModule' },
    { path: 'comentariodocumento/print/:id', loadChildren: './main/comentariodocumento/comentariodocumento-print/comentariodocumento-print.module#ComentarioDocumentoPrintModule' },
    { path: 'documento/print/:id', loadChildren: './main/documento/documento-print/documento-print.module#DocumentoPrintModule' },
    { path: 'fluxotrabalhostatus/print/:id', loadChildren: './main/fluxotrabalhostatus/fluxotrabalhostatus-print/fluxotrabalhostatus-print.module#FluxoTrabalhoStatusPrintModule' },
    { path: 'fluxotrabalhotipo/print/:id', loadChildren: './main/fluxotrabalhotipo/fluxotrabalhotipo-print/fluxotrabalhotipo-print.module#FluxoTrabalhoTipoPrintModule' },
    { path: 'pendeciaprioridade/print/:id', loadChildren: './main/pendeciaprioridade/pendeciaprioridade-print/pendeciaprioridade-print.module#PendeciaPrioridadePrintModule' },
    { path: 'pendenciaeventos/print/:id', loadChildren: './main/pendenciaeventos/pendenciaeventos-print/pendenciaeventos-print.module#PendenciaEventosPrintModule' },
    { path: 'pendenciadocumento/print/:id', loadChildren: './main/pendenciadocumento/pendenciadocumento-print/pendenciadocumento-print.module#PendenciaDocumentoPrintModule' },
    { path: 'pendenciatipo/print/:id', loadChildren: './main/pendenciatipo/pendenciatipo-print/pendenciatipo-print.module#PendenciaTipoPrintModule' },
    { path: 'projeto/print/:id', loadChildren: './main/projeto/projeto-print/projeto-print.module#ProjetoPrintModule' },
    { path: 'projetofluxotrabalhostatus/print/:id', loadChildren: './main/projetofluxotrabalhostatus/projetofluxotrabalhostatus-print/projetofluxotrabalhostatus-print.module#ProjetoFluxoTrabalhoStatusPrintModule' },
    { path: 'pendenciatempos/print/:id', loadChildren: './main/pendenciatempos/pendenciatempos-print/pendenciatempos-print.module#PendenciaTemposPrintModule' },
    { path: 'usuariotipo/print/:id', loadChildren: './main/usuariotipo/usuariotipo-print/usuariotipo-print.module#UsuarioTipoPrintModule' },

]


export const RoutingDefault: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES_DEFAULT);


