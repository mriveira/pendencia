(function () {
    'use strict';

    angular.module("Target.Config")
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'TokenConstants', 'breadcrumbConstants'];

    function routeConfig($stateProvider, $urlRouterProvider, TokenConstants, breadcrumbConstants) {
	
        var _isAuth = TokenConstants.ISAUTH;

        $stateProvider

		
            .state('template', {
                url: '',
                abstract: true,
                views: {
                    'main': {
                        templateUrl: 'template/layout.html'
                    }
                }
            })

                        
            .state('template.Acompanhadores', {
                url: '/Acompanhadores',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Acompanhadores
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Acompanhadores/index.html'),
                        controller: 'AcompanhadoresController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Acompanhadores.constants.js',
										'js/controllers/Acompanhadores/Acompanhadores.custom.controller.js',
										'js/controllers/Acompanhadores/Acompanhadores.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Acompanhadores-edit', {
                url: '/Acompanhadores/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Acompanhadores
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Acompanhadores/edit.html'),
                        controller: 'AcompanhadoresController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Acompanhadores.constants.js',
										'js/controllers/Acompanhadores/Acompanhadores.custom.controller.js',
										'js/controllers/Acompanhadores/Acompanhadores.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('Acompanhadores-print', {
                url: '/Acompanhadores/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Acompanhadores
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/Acompanhadores/details.html'),
                        controller: 'AcompanhadoresController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Acompanhadores.constants.js',
										'js/controllers/Acompanhadores/Acompanhadores.custom.controller.js',
										'js/controllers/Acompanhadores/Acompanhadores.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Acompanhadores-create', {
                url: '/Acompanhadores/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Acompanhadores
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Acompanhadores/create.html'),
                        controller: 'AcompanhadoresController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Acompanhadores.constants.js',
										'js/controllers/Acompanhadores/Acompanhadores.custom.controller.js',
										'js/controllers/Acompanhadores/Acompanhadores.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.Cliente', {
                url: '/Cliente',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Cliente
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Cliente/index.html'),
                        controller: 'ClienteController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Cliente.constants.js',
										'js/controllers/Cliente/Cliente.custom.controller.js',
										'js/controllers/Cliente/Cliente.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Cliente-edit', {
                url: '/Cliente/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Cliente
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Cliente/edit.html'),
                        controller: 'ClienteController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Cliente.constants.js',
										'js/controllers/Cliente/Cliente.custom.controller.js',
										'js/controllers/Cliente/Cliente.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('Cliente-print', {
                url: '/Cliente/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Cliente
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/Cliente/details.html'),
                        controller: 'ClienteController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Cliente.constants.js',
										'js/controllers/Cliente/Cliente.custom.controller.js',
										'js/controllers/Cliente/Cliente.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Cliente-create', {
                url: '/Cliente/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Cliente
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Cliente/create.html'),
                        controller: 'ClienteController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Cliente.constants.js',
										'js/controllers/Cliente/Cliente.custom.controller.js',
										'js/controllers/Cliente/Cliente.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.Comentario', {
                url: '/Comentario',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Comentario
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Comentario/index.html'),
                        controller: 'ComentarioController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Comentario.constants.js',
										'js/controllers/Comentario/Comentario.custom.controller.js',
										'js/controllers/Comentario/Comentario.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Comentario-edit', {
                url: '/Comentario/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Comentario
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Comentario/edit.html'),
                        controller: 'ComentarioController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Comentario.constants.js',
										'js/controllers/Comentario/Comentario.custom.controller.js',
										'js/controllers/Comentario/Comentario.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('Comentario-print', {
                url: '/Comentario/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Comentario
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/Comentario/details.html'),
                        controller: 'ComentarioController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Comentario.constants.js',
										'js/controllers/Comentario/Comentario.custom.controller.js',
										'js/controllers/Comentario/Comentario.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Comentario-create', {
                url: '/Comentario/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Comentario
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Comentario/create.html'),
                        controller: 'ComentarioController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Comentario.constants.js',
										'js/controllers/Comentario/Comentario.custom.controller.js',
										'js/controllers/Comentario/Comentario.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.ComentarioDocumento', {
                url: '/ComentarioDocumento',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.ComentarioDocumento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/ComentarioDocumento/index.html'),
                        controller: 'ComentarioDocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/ComentarioDocumento.constants.js',
										'js/controllers/ComentarioDocumento/ComentarioDocumento.custom.controller.js',
										'js/controllers/ComentarioDocumento/ComentarioDocumento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.ComentarioDocumento-edit', {
                url: '/ComentarioDocumento/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.ComentarioDocumento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/ComentarioDocumento/edit.html'),
                        controller: 'ComentarioDocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/ComentarioDocumento.constants.js',
										'js/controllers/ComentarioDocumento/ComentarioDocumento.custom.controller.js',
										'js/controllers/ComentarioDocumento/ComentarioDocumento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('ComentarioDocumento-print', {
                url: '/ComentarioDocumento/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.ComentarioDocumento
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/ComentarioDocumento/details.html'),
                        controller: 'ComentarioDocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/ComentarioDocumento.constants.js',
										'js/controllers/ComentarioDocumento/ComentarioDocumento.custom.controller.js',
										'js/controllers/ComentarioDocumento/ComentarioDocumento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.ComentarioDocumento-create', {
                url: '/ComentarioDocumento/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.ComentarioDocumento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/ComentarioDocumento/create.html'),
                        controller: 'ComentarioDocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/ComentarioDocumento.constants.js',
										'js/controllers/ComentarioDocumento/ComentarioDocumento.custom.controller.js',
										'js/controllers/ComentarioDocumento/ComentarioDocumento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.Documento', {
                url: '/Documento',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Documento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Documento/index.html'),
                        controller: 'DocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Documento.constants.js',
										'js/controllers/Documento/Documento.custom.controller.js',
										'js/controllers/Documento/Documento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Documento-edit', {
                url: '/Documento/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Documento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Documento/edit.html'),
                        controller: 'DocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Documento.constants.js',
										'js/controllers/Documento/Documento.custom.controller.js',
										'js/controllers/Documento/Documento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('Documento-print', {
                url: '/Documento/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Documento
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/Documento/details.html'),
                        controller: 'DocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Documento.constants.js',
										'js/controllers/Documento/Documento.custom.controller.js',
										'js/controllers/Documento/Documento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Documento-create', {
                url: '/Documento/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Documento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Documento/create.html'),
                        controller: 'DocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Documento.constants.js',
										'js/controllers/Documento/Documento.custom.controller.js',
										'js/controllers/Documento/Documento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.FluxoTrabalhoStatus', {
                url: '/FluxoTrabalhoStatus',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.FluxoTrabalhoStatus
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/FluxoTrabalhoStatus/index.html'),
                        controller: 'FluxoTrabalhoStatusController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/FluxoTrabalhoStatus.constants.js',
										'js/controllers/FluxoTrabalhoStatus/FluxoTrabalhoStatus.custom.controller.js',
										'js/controllers/FluxoTrabalhoStatus/FluxoTrabalhoStatus.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.FluxoTrabalhoStatus-edit', {
                url: '/FluxoTrabalhoStatus/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.FluxoTrabalhoStatus
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/FluxoTrabalhoStatus/edit.html'),
                        controller: 'FluxoTrabalhoStatusController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/FluxoTrabalhoStatus.constants.js',
										'js/controllers/FluxoTrabalhoStatus/FluxoTrabalhoStatus.custom.controller.js',
										'js/controllers/FluxoTrabalhoStatus/FluxoTrabalhoStatus.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('FluxoTrabalhoStatus-print', {
                url: '/FluxoTrabalhoStatus/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.FluxoTrabalhoStatus
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/FluxoTrabalhoStatus/details.html'),
                        controller: 'FluxoTrabalhoStatusController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/FluxoTrabalhoStatus.constants.js',
										'js/controllers/FluxoTrabalhoStatus/FluxoTrabalhoStatus.custom.controller.js',
										'js/controllers/FluxoTrabalhoStatus/FluxoTrabalhoStatus.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.FluxoTrabalhoStatus-create', {
                url: '/FluxoTrabalhoStatus/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.FluxoTrabalhoStatus
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/FluxoTrabalhoStatus/create.html'),
                        controller: 'FluxoTrabalhoStatusController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/FluxoTrabalhoStatus.constants.js',
										'js/controllers/FluxoTrabalhoStatus/FluxoTrabalhoStatus.custom.controller.js',
										'js/controllers/FluxoTrabalhoStatus/FluxoTrabalhoStatus.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.FluxoTrabalhoTipo', {
                url: '/FluxoTrabalhoTipo',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.FluxoTrabalhoTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/FluxoTrabalhoTipo/index.html'),
                        controller: 'FluxoTrabalhoTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/FluxoTrabalhoTipo.constants.js',
										'js/controllers/FluxoTrabalhoTipo/FluxoTrabalhoTipo.custom.controller.js',
										'js/controllers/FluxoTrabalhoTipo/FluxoTrabalhoTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.FluxoTrabalhoTipo-edit', {
                url: '/FluxoTrabalhoTipo/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.FluxoTrabalhoTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/FluxoTrabalhoTipo/edit.html'),
                        controller: 'FluxoTrabalhoTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/FluxoTrabalhoTipo.constants.js',
										'js/controllers/FluxoTrabalhoTipo/FluxoTrabalhoTipo.custom.controller.js',
										'js/controllers/FluxoTrabalhoTipo/FluxoTrabalhoTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('FluxoTrabalhoTipo-print', {
                url: '/FluxoTrabalhoTipo/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.FluxoTrabalhoTipo
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/FluxoTrabalhoTipo/details.html'),
                        controller: 'FluxoTrabalhoTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/FluxoTrabalhoTipo.constants.js',
										'js/controllers/FluxoTrabalhoTipo/FluxoTrabalhoTipo.custom.controller.js',
										'js/controllers/FluxoTrabalhoTipo/FluxoTrabalhoTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.FluxoTrabalhoTipo-create', {
                url: '/FluxoTrabalhoTipo/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.FluxoTrabalhoTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/FluxoTrabalhoTipo/create.html'),
                        controller: 'FluxoTrabalhoTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/FluxoTrabalhoTipo.constants.js',
										'js/controllers/FluxoTrabalhoTipo/FluxoTrabalhoTipo.custom.controller.js',
										'js/controllers/FluxoTrabalhoTipo/FluxoTrabalhoTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.PendeciaPrioridade', {
                url: '/PendeciaPrioridade',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendeciaPrioridade
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendeciaPrioridade/index.html'),
                        controller: 'PendeciaPrioridadeController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendeciaPrioridade.constants.js',
										'js/controllers/PendeciaPrioridade/PendeciaPrioridade.custom.controller.js',
										'js/controllers/PendeciaPrioridade/PendeciaPrioridade.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendeciaPrioridade-edit', {
                url: '/PendeciaPrioridade/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendeciaPrioridade
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendeciaPrioridade/edit.html'),
                        controller: 'PendeciaPrioridadeController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendeciaPrioridade.constants.js',
										'js/controllers/PendeciaPrioridade/PendeciaPrioridade.custom.controller.js',
										'js/controllers/PendeciaPrioridade/PendeciaPrioridade.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('PendeciaPrioridade-print', {
                url: '/PendeciaPrioridade/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendeciaPrioridade
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/PendeciaPrioridade/details.html'),
                        controller: 'PendeciaPrioridadeController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendeciaPrioridade.constants.js',
										'js/controllers/PendeciaPrioridade/PendeciaPrioridade.custom.controller.js',
										'js/controllers/PendeciaPrioridade/PendeciaPrioridade.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendeciaPrioridade-create', {
                url: '/PendeciaPrioridade/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendeciaPrioridade
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendeciaPrioridade/create.html'),
                        controller: 'PendeciaPrioridadeController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendeciaPrioridade.constants.js',
										'js/controllers/PendeciaPrioridade/PendeciaPrioridade.custom.controller.js',
										'js/controllers/PendeciaPrioridade/PendeciaPrioridade.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.PendenciaEventos', {
                url: '/PendenciaEventos',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaEventos
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaEventos/index.html'),
                        controller: 'PendenciaEventosController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaEventos.constants.js',
										'js/controllers/PendenciaEventos/PendenciaEventos.custom.controller.js',
										'js/controllers/PendenciaEventos/PendenciaEventos.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendenciaEventos-edit', {
                url: '/PendenciaEventos/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaEventos
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaEventos/edit.html'),
                        controller: 'PendenciaEventosController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaEventos.constants.js',
										'js/controllers/PendenciaEventos/PendenciaEventos.custom.controller.js',
										'js/controllers/PendenciaEventos/PendenciaEventos.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('PendenciaEventos-print', {
                url: '/PendenciaEventos/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaEventos
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/PendenciaEventos/details.html'),
                        controller: 'PendenciaEventosController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaEventos.constants.js',
										'js/controllers/PendenciaEventos/PendenciaEventos.custom.controller.js',
										'js/controllers/PendenciaEventos/PendenciaEventos.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendenciaEventos-create', {
                url: '/PendenciaEventos/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaEventos
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaEventos/create.html'),
                        controller: 'PendenciaEventosController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaEventos.constants.js',
										'js/controllers/PendenciaEventos/PendenciaEventos.custom.controller.js',
										'js/controllers/PendenciaEventos/PendenciaEventos.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.Pendencia', {
                url: '/Pendencia',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Pendencia
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Pendencia/index.html'),
                        controller: 'PendenciaController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Pendencia.constants.js',
										'js/controllers/Pendencia/Pendencia.custom.controller.js',
										'js/controllers/Pendencia/Pendencia.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Pendencia-edit', {
                url: '/Pendencia/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Pendencia
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Pendencia/edit.html'),
                        controller: 'PendenciaController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Pendencia.constants.js',
										'js/controllers/Pendencia/Pendencia.custom.controller.js',
										'js/controllers/Pendencia/Pendencia.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('Pendencia-print', {
                url: '/Pendencia/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Pendencia
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/Pendencia/details.html'),
                        controller: 'PendenciaController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Pendencia.constants.js',
										'js/controllers/Pendencia/Pendencia.custom.controller.js',
										'js/controllers/Pendencia/Pendencia.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Pendencia-create', {
                url: '/Pendencia/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Pendencia
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Pendencia/create.html'),
                        controller: 'PendenciaController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Pendencia.constants.js',
										'js/controllers/Pendencia/Pendencia.custom.controller.js',
										'js/controllers/Pendencia/Pendencia.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.PendenciaDocumento', {
                url: '/PendenciaDocumento',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaDocumento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaDocumento/index.html'),
                        controller: 'PendenciaDocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaDocumento.constants.js',
										'js/controllers/PendenciaDocumento/PendenciaDocumento.custom.controller.js',
										'js/controllers/PendenciaDocumento/PendenciaDocumento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendenciaDocumento-edit', {
                url: '/PendenciaDocumento/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaDocumento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaDocumento/edit.html'),
                        controller: 'PendenciaDocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaDocumento.constants.js',
										'js/controllers/PendenciaDocumento/PendenciaDocumento.custom.controller.js',
										'js/controllers/PendenciaDocumento/PendenciaDocumento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('PendenciaDocumento-print', {
                url: '/PendenciaDocumento/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaDocumento
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/PendenciaDocumento/details.html'),
                        controller: 'PendenciaDocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaDocumento.constants.js',
										'js/controllers/PendenciaDocumento/PendenciaDocumento.custom.controller.js',
										'js/controllers/PendenciaDocumento/PendenciaDocumento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendenciaDocumento-create', {
                url: '/PendenciaDocumento/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaDocumento
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaDocumento/create.html'),
                        controller: 'PendenciaDocumentoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaDocumento.constants.js',
										'js/controllers/PendenciaDocumento/PendenciaDocumento.custom.controller.js',
										'js/controllers/PendenciaDocumento/PendenciaDocumento.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.PendenciaTipo', {
                url: '/PendenciaTipo',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaTipo/index.html'),
                        controller: 'PendenciaTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaTipo.constants.js',
										'js/controllers/PendenciaTipo/PendenciaTipo.custom.controller.js',
										'js/controllers/PendenciaTipo/PendenciaTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendenciaTipo-edit', {
                url: '/PendenciaTipo/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaTipo/edit.html'),
                        controller: 'PendenciaTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaTipo.constants.js',
										'js/controllers/PendenciaTipo/PendenciaTipo.custom.controller.js',
										'js/controllers/PendenciaTipo/PendenciaTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('PendenciaTipo-print', {
                url: '/PendenciaTipo/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaTipo
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/PendenciaTipo/details.html'),
                        controller: 'PendenciaTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaTipo.constants.js',
										'js/controllers/PendenciaTipo/PendenciaTipo.custom.controller.js',
										'js/controllers/PendenciaTipo/PendenciaTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendenciaTipo-create', {
                url: '/PendenciaTipo/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaTipo/create.html'),
                        controller: 'PendenciaTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaTipo.constants.js',
										'js/controllers/PendenciaTipo/PendenciaTipo.custom.controller.js',
										'js/controllers/PendenciaTipo/PendenciaTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.Projeto', {
                url: '/Projeto',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Projeto
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Projeto/index.html'),
                        controller: 'ProjetoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Projeto.constants.js',
										'js/controllers/Projeto/Projeto.custom.controller.js',
										'js/controllers/Projeto/Projeto.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Projeto-edit', {
                url: '/Projeto/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Projeto
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Projeto/edit.html'),
                        controller: 'ProjetoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Projeto.constants.js',
										'js/controllers/Projeto/Projeto.custom.controller.js',
										'js/controllers/Projeto/Projeto.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('Projeto-print', {
                url: '/Projeto/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Projeto
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/Projeto/details.html'),
                        controller: 'ProjetoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Projeto.constants.js',
										'js/controllers/Projeto/Projeto.custom.controller.js',
										'js/controllers/Projeto/Projeto.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Projeto-create', {
                url: '/Projeto/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Projeto
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Projeto/create.html'),
                        controller: 'ProjetoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Projeto.constants.js',
										'js/controllers/Projeto/Projeto.custom.controller.js',
										'js/controllers/Projeto/Projeto.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.ProjetoFluxoTrabalhoStatus', {
                url: '/ProjetoFluxoTrabalhoStatus',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.ProjetoFluxoTrabalhoStatus
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/ProjetoFluxoTrabalhoStatus/index.html'),
                        controller: 'ProjetoFluxoTrabalhoStatusController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/ProjetoFluxoTrabalhoStatus.constants.js',
										'js/controllers/ProjetoFluxoTrabalhoStatus/ProjetoFluxoTrabalhoStatus.custom.controller.js',
										'js/controllers/ProjetoFluxoTrabalhoStatus/ProjetoFluxoTrabalhoStatus.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.ProjetoFluxoTrabalhoStatus-edit', {
                url: '/ProjetoFluxoTrabalhoStatus/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.ProjetoFluxoTrabalhoStatus
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/ProjetoFluxoTrabalhoStatus/edit.html'),
                        controller: 'ProjetoFluxoTrabalhoStatusController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/ProjetoFluxoTrabalhoStatus.constants.js',
										'js/controllers/ProjetoFluxoTrabalhoStatus/ProjetoFluxoTrabalhoStatus.custom.controller.js',
										'js/controllers/ProjetoFluxoTrabalhoStatus/ProjetoFluxoTrabalhoStatus.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('ProjetoFluxoTrabalhoStatus-print', {
                url: '/ProjetoFluxoTrabalhoStatus/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.ProjetoFluxoTrabalhoStatus
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/ProjetoFluxoTrabalhoStatus/details.html'),
                        controller: 'ProjetoFluxoTrabalhoStatusController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/ProjetoFluxoTrabalhoStatus.constants.js',
										'js/controllers/ProjetoFluxoTrabalhoStatus/ProjetoFluxoTrabalhoStatus.custom.controller.js',
										'js/controllers/ProjetoFluxoTrabalhoStatus/ProjetoFluxoTrabalhoStatus.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.ProjetoFluxoTrabalhoStatus-create', {
                url: '/ProjetoFluxoTrabalhoStatus/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.ProjetoFluxoTrabalhoStatus
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/ProjetoFluxoTrabalhoStatus/create.html'),
                        controller: 'ProjetoFluxoTrabalhoStatusController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/ProjetoFluxoTrabalhoStatus.constants.js',
										'js/controllers/ProjetoFluxoTrabalhoStatus/ProjetoFluxoTrabalhoStatus.custom.controller.js',
										'js/controllers/ProjetoFluxoTrabalhoStatus/ProjetoFluxoTrabalhoStatus.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.PendenciaTempos', {
                url: '/PendenciaTempos',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaTempos
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaTempos/index.html'),
                        controller: 'PendenciaTemposController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaTempos.constants.js',
										'js/controllers/PendenciaTempos/PendenciaTempos.custom.controller.js',
										'js/controllers/PendenciaTempos/PendenciaTempos.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendenciaTempos-edit', {
                url: '/PendenciaTempos/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaTempos
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaTempos/edit.html'),
                        controller: 'PendenciaTemposController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaTempos.constants.js',
										'js/controllers/PendenciaTempos/PendenciaTempos.custom.controller.js',
										'js/controllers/PendenciaTempos/PendenciaTempos.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('PendenciaTempos-print', {
                url: '/PendenciaTempos/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaTempos
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/PendenciaTempos/details.html'),
                        controller: 'PendenciaTemposController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaTempos.constants.js',
										'js/controllers/PendenciaTempos/PendenciaTempos.custom.controller.js',
										'js/controllers/PendenciaTempos/PendenciaTempos.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.PendenciaTempos-create', {
                url: '/PendenciaTempos/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.PendenciaTempos
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/PendenciaTempos/create.html'),
                        controller: 'PendenciaTemposController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/PendenciaTempos.constants.js',
										'js/controllers/PendenciaTempos/PendenciaTempos.custom.controller.js',
										'js/controllers/PendenciaTempos/PendenciaTempos.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.Usuario', {
                url: '/Usuario',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Usuario
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Usuario/index.html'),
                        controller: 'UsuarioController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Usuario.constants.js',
										'js/controllers/Usuario/Usuario.custom.controller.js',
										'js/controllers/Usuario/Usuario.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Usuario-edit', {
                url: '/Usuario/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Usuario
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Usuario/edit.html'),
                        controller: 'UsuarioController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Usuario.constants.js',
										'js/controllers/Usuario/Usuario.custom.controller.js',
										'js/controllers/Usuario/Usuario.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('Usuario-print', {
                url: '/Usuario/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Usuario
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/Usuario/details.html'),
                        controller: 'UsuarioController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Usuario.constants.js',
										'js/controllers/Usuario/Usuario.custom.controller.js',
										'js/controllers/Usuario/Usuario.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.Usuario-create', {
                url: '/Usuario/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.Usuario
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/Usuario/create.html'),
                        controller: 'UsuarioController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/Usuario.constants.js',
										'js/controllers/Usuario/Usuario.custom.controller.js',
										'js/controllers/Usuario/Usuario.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })
            
            .state('template.UsuarioTipo', {
                url: '/UsuarioTipo',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.UsuarioTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/UsuarioTipo/index.html'),
                        controller: 'UsuarioTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/UsuarioTipo.constants.js',
										'js/controllers/UsuarioTipo/UsuarioTipo.custom.controller.js',
										'js/controllers/UsuarioTipo/UsuarioTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.UsuarioTipo-edit', {
                url: '/UsuarioTipo/Edit/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.UsuarioTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/UsuarioTipo/edit.html'),
                        controller: 'UsuarioTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/UsuarioTipo.constants.js',
										'js/controllers/UsuarioTipo/UsuarioTipo.custom.controller.js',
										'js/controllers/UsuarioTipo/UsuarioTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })

			.state('UsuarioTipo-print', {
                url: '/UsuarioTipo/Print/:Id',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.UsuarioTipo
                },
                views: {
                    'mainBody': {
                        templateUrl: MakeUrl('view/UsuarioTipo/details.html'),
                        controller: 'UsuarioTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/UsuarioTipo.constants.js',
										'js/controllers/UsuarioTipo/UsuarioTipo.custom.controller.js',
										'js/controllers/UsuarioTipo/UsuarioTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


			.state('template.UsuarioTipo-create', {
                url: '/UsuarioTipo/Create',
				ncyBreadcrumb: {
                    label: breadcrumbConstants.UsuarioTipo
                },
                views: {
                    'content': {
                        templateUrl: MakeUrl('view/UsuarioTipo/create.html'),
                        controller: 'UsuarioTipoController as vm',
                        resolve: {
                            auth: _isAuth,
                            loadPlugin: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                    [
										'js/constants/UsuarioTipo.constants.js',
										'js/controllers/UsuarioTipo/UsuarioTipo.custom.controller.js',
										'js/controllers/UsuarioTipo/UsuarioTipo.controller.js'
									]
                                );
                            }
                        }
                    }
                }
            })


        function MakeUrl(url, noCache) {
            if (noCache)
                return url;

            return url + '?v=' + Math.random();
        }

    };

})();