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

            { path: 'usuario', loadChildren: './main/usuario/usuario.module#UsuarioModule' },
        ]
    },
    { path: 'usuario/print/:id', loadChildren: './main/usuario/usuario-print/usuario-print.module#UsuarioPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'acompanhadores', loadChildren: './main/acompanhadores/acompanhadores.module#AcompanhadoresModule' },
        ]
    },
    { path: 'acompanhadores/print/:id', loadChildren: './main/acompanhadores/acompanhadores-print/acompanhadores-print.module#AcompanhadoresPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'cliente', loadChildren: './main/cliente/cliente.module#ClienteModule' },
        ]
    },
    { path: 'cliente/print/:id', loadChildren: './main/cliente/cliente-print/cliente-print.module#ClientePrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'comentario', loadChildren: './main/comentario/comentario.module#ComentarioModule' },
        ]
    },
    { path: 'comentario/print/:id', loadChildren: './main/comentario/comentario-print/comentario-print.module#ComentarioPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'comentariodocumento', loadChildren: './main/comentariodocumento/comentariodocumento.module#ComentarioDocumentoModule' },
        ]
    },
    { path: 'comentariodocumento/print/:id', loadChildren: './main/comentariodocumento/comentariodocumento-print/comentariodocumento-print.module#ComentarioDocumentoPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'documento', loadChildren: './main/documento/documento.module#DocumentoModule' },
        ]
    },
    { path: 'documento/print/:id', loadChildren: './main/documento/documento-print/documento-print.module#DocumentoPrintModule' },

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

    {
        path: '', component: MainComponent, children: [

            { path: 'pendeciaprioridade', loadChildren: './main/pendeciaprioridade/pendeciaprioridade.module#PendeciaPrioridadeModule' },
        ]
    },
    { path: 'pendeciaprioridade/print/:id', loadChildren: './main/pendeciaprioridade/pendeciaprioridade-print/pendeciaprioridade-print.module#PendeciaPrioridadePrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'pendenciaeventos', loadChildren: './main/pendenciaeventos/pendenciaeventos.module#PendenciaEventosModule' },
        ]
    },
    { path: 'pendenciaeventos/print/:id', loadChildren: './main/pendenciaeventos/pendenciaeventos-print/pendenciaeventos-print.module#PendenciaEventosPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'pendenciadocumento', loadChildren: './main/pendenciadocumento/pendenciadocumento.module#PendenciaDocumentoModule' },
        ]
    },
    { path: 'pendenciadocumento/print/:id', loadChildren: './main/pendenciadocumento/pendenciadocumento-print/pendenciadocumento-print.module#PendenciaDocumentoPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'pendenciatipo', loadChildren: './main/pendenciatipo/pendenciatipo.module#PendenciaTipoModule' },
        ]
    },
    { path: 'pendenciatipo/print/:id', loadChildren: './main/pendenciatipo/pendenciatipo-print/pendenciatipo-print.module#PendenciaTipoPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'projeto', loadChildren: './main/projeto/projeto.module#ProjetoModule' },
        ]
    },
    { path: 'projeto/print/:id', loadChildren: './main/projeto/projeto-print/projeto-print.module#ProjetoPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'projetofluxotrabalhostatus', loadChildren: './main/projetofluxotrabalhostatus/projetofluxotrabalhostatus.module#ProjetoFluxoTrabalhoStatusModule' },
        ]
    },
    { path: 'projetofluxotrabalhostatus/print/:id', loadChildren: './main/projetofluxotrabalhostatus/projetofluxotrabalhostatus-print/projetofluxotrabalhostatus-print.module#ProjetoFluxoTrabalhoStatusPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'pendenciatempos', loadChildren: './main/pendenciatempos/pendenciatempos.module#PendenciaTemposModule' },
        ]
    },
    { path: 'pendenciatempos/print/:id', loadChildren: './main/pendenciatempos/pendenciatempos-print/pendenciatempos-print.module#PendenciaTemposPrintModule' },

    {
        path: '', component: MainComponent, children: [

            { path: 'usuariotipo', loadChildren: './main/usuariotipo/usuariotipo.module#UsuarioTipoModule' },
        ]
    },
    { path: 'usuariotipo/print/:id', loadChildren: './main/usuariotipo/usuariotipo-print/usuariotipo-print.module#UsuarioTipoPrintModule' },



]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
