(function () {
    'use strict';

    angular.module("Target.Controllers")
        .controller("DashboardTeamController", DashboardTeamController);

    DashboardTeamController.$inject = ['Crud', 'PendenciaConstants', '$uibModal', 'Notification', '$stateParams', '$location', '$timeout', 'Api', 'endpoints', 'Cache']

    function DashboardTeamController(Crud, PendenciaConstants, $uibModal, Notification, $stateParams, $location, $timeout, Api, endpoints, Cache) {


        var vm = this;
        vm.ActionTitle = "Dashboard do Time";
        vm.ActionDescription = "...";
        vm.mostrarFiltros = false;
        vm.Labels = PendenciaConstants.Labels;
        vm.uploadUri = endpoints.DEFAULT + "document/download/";
        vm.crud = {};


        vm.crud.ModelFilter = _getFilters();

        _configuraAcoes();

        _ObterPendencia(_getFilters());

        _ObterTempos({
            AttributeBehavior : "TimeSheet",
        });


        function _configuraAcoes() {


            vm.Pendencias = {};

            vm.Pendencias.play = function (id) {


                var newModel = {
                    AttributeBehavior: "Play",
                    PendenciaId: id
                };

                var confirm = "Tem certeza de que deseja iniciar essa pendência?";
                _configCrud("Pendencia", false, confirm)
                    .ExecuteWithOutConfirmation(newModel, Notification, function () {
                        _ObterPendencia(_getFilters());
                        _ObterTempos({
                            AttributeBehavior: "TimeSheet",
                        });
                    });

            }

            vm.Pendencias.stopWithNotes = function (id) {


                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "view/DashboardTeam/parar.modal.html?v=" + vm.randomDefault,
                    controller: function (model, $uibModalInstance) {

                        var vm = this;
                        vm.Model = model;
                        vm.ActionTitle = "Parar Pendência";

                        vm.ok = function (model) {

                            var newModel = angular.merge({}, model, {
                                PendenciaId: id,
                                AttributeBehavior: "Stop",
                                Nota: model != null ? model.nota : null
                            })

                            _configCrud("Pendencia", false).ExecuteWithOutConfirmation(newModel, Notification, function () {
                                $uibModalInstance.close();
                                _ObterPendencia(_getFilters());
                                _ObterTempos({
                                    AttributeBehavior: "TimeSheet",
                                });
                            });

                        }

                        vm.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };

                    },
                    size: 100,
                    controllerAs: 'vm',
                    resolve: {
                        labels: function () {

                        },
                        attributes: function () {

                        },
                        model: function () {

                        }
                    }
                });


            }

            vm.Pendencias.concluirWithNotes = function (id) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "view/DashboardTeam/concluir.modal.html?v=" + vm.randomDefault,
                    controller: function (model, $uibModalInstance) {

                        var vm = this;
                        vm.Model = model;
                        vm.ActionTitle = "Concluir";


                        vm.ok = function (model) {

                            console.log(model)

                            var newModel = angular.merge({}, model, {
                                PendenciaId: id,
                                AttributeBehavior: "ConcluirPendencia",
                                Nota: model != null ? model.nota : null,
                                CollectionComentario: [{
                                    Descricao: model != null ? model.comentario : null
                                }]
                            })

                            _configCrud("Pendencia", false).ExecuteWithOutConfirmation(newModel, Notification, function () {
                                $uibModalInstance.close();
                               
                                _ObterPendencia(_getFilters());
                                _ObterTempos({
                                    AttributeBehavior: "TimeSheet",
                                });
                            });

                        }

                        vm.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };

                    },
                    size: 100,
                    controllerAs: 'vm',
                    resolve: {
                        labels: function () {

                        },
                        attributes: function () {

                        },
                        model: function () {

                        }
                    }
                });

            }

            vm.Pendencias.reclassificarWithNotes = function (id) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "view/DashboardTeam/reclassificar.modal.html?v=" + vm.randomDefault,
                    controller: function (model, $uibModalInstance) {

                        var vm = this;
                        vm.Model = model;
                        vm.ActionTitle = "Reclassificar";

                        vm.ok = function (model) {

                            var newModel = angular.merge({}, model, {
                                PendenciaId: id,
                                FluxoTrabalhoStatusId: model.fluxoTrabalhoStatusId,
                                AttributeBehavior: "Reclassificar",
                                CollectionComentario: [{
                                    Descricao: model != null ? model.comentario : null
                                }]
                            })

                            _configCrud("Pendencia", false).ExecuteWithOutConfirmation(newModel, Notification, function () {
                                $uibModalInstance.close();
                                _ObterPendencia(_getFilters());
                                _ObterTempos({
                                    AttributeBehavior: "TimeSheet",
                                });
                            });

                        }

                        vm.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };

                    },
                    size: 100,
                    controllerAs: 'vm',
                    resolve: {
                        labels: function () {

                        },
                        attributes: function () {

                        },
                        model: function () {

                        }
                    }
                });

            }

            vm.Pendencias.comentar = function (id) {


                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "view/DashboardTeam/comentar.modal.html?v=" + vm.randomDefault,
                    controller: function (model, $uibModalInstance) {

                        var vm = this;
                        vm.Model = model;
                        vm.ActionTitle = "Comentar";

                        vm.ok = function (model) {

                            var newModel = angular.merge({}, model, {
                                PendenciaId: id,
                                AttributeBehavior: "ComentarPendencia",
                                CollectionComentario: [{
                                    Descricao: model != null ? model.comentario : null
                                }]
                            })

                            _configCrud("Pendencia", false).ExecuteWithOutConfirmation(newModel, Notification, function () {
                                $uibModalInstance.close();
                                _ObterPendencia(_getFilters());
                            });

                        }

                        vm.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };

                    },
                    size: 100,
                    controllerAs: 'vm',
                    resolve: {
                        labels: function () {

                        },
                        attributes: function () {

                        },
                        model: function () {

                        }
                    }
                });


            }

            vm.Pendencias.timeSheetEdit = function (id) {

                console.log("vm.Pendencias.timeSheetEdit", id);
                self.ApiResource = new Api.resourse("PendenciaTempos");
                self.ApiResource.Filter.Id = id;

                self.ApiResource.SuccessHandle = function (data) {


                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: "view/DashboardTeam/timeSheet.modal.html?v=" + vm.randomDefault,
                        controller: function (model, $uibModalInstance) {

                            var vm = this;
                            vm.Model = model;
                            vm.ActionTitle = "Ediatar Tempo";
                            console.log(vm.Model.fim);
                            vm.Model.fim = vm.Model.fim == null ? new Date() : vm.Model.fim


                            vm.ok = function (model) {

                                var newModel = angular.merge({}, model, {
                                    PendenciaTemposId: id,
                                    Inicio: model.inicio,
                                    Fim: model.fim,
                                    Nota: model.nota,
                                    AttributeBehavior: "EditarTempo"
                                })

                                _configCrud("PendenciaTempos", false).ExecuteWithOutConfirmation(newModel, Notification, function () {
                                    $uibModalInstance.close();

                                    _ObterTempos({
                                        AttributeBehavior: "TimeSheet",
                                    });

                                    _ObterPendencia(_getFilters());
                                });

                            }

                            vm.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };

                            vm.openCalendar = function (e, vm, index) {
                                e.preventDefault();
                                e.stopPropagation();
                                vm[index] = true;
                            };

                        },
                        size: 100,
                        controllerAs: 'vm',
                        resolve: {
                            model: function () {
                                return data.data;
                            }
                        },
                    });


                }

                self.ApiResource.Get();


            }

            vm.Pendencias.historico = function (id) {


                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "view/DashboardTeam/historico.modal.html?v=" + vm.randomDefault,
                    controller: function (model, $uibModalInstance) {

                        var vm = this;
                        vm.Model = model;
                        vm.ActionTitle = "Histórico";

                        var apiPendencia = new Api.resourse("Pendencia");
                        apiPendencia.Filter = {
                            Id: id,
                        };

                        apiPendencia.SuccessHandle = function (data) {
                            vm.ActionDescription = data.data.resumo;
                        }
                        apiPendencia.Get();



                        var apiComentario = new Api.resourse("Comentario");
                        apiComentario.Filter = {
                            pendenciaId: id
                        };

                        apiComentario.SuccessHandle = function (data) {
                            vm.Model = data.dataList;
                        }

                        apiComentario.Get();

                        vm.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };

                    },
                    size: 100,
                    controllerAs: 'vm',
                    resolve: {
                        labels: function () {

                        },
                        attributes: function () {

                        },
                        model: function () {

                        }
                    }
                });


            }

            vm.Pendencias.detalhes = function (id) {

                console.log(PendenciaConstants);

                vm.crud = _configCrud("Pendencia", false);
                vm.crud.Details(id);
                vm.Labels = PendenciaConstants.Labels;

            }

            vm.minhasPendencias = function () {

                var modelFilter = {
                    AttributeBehavior: "MinhasPendencias"
                };

                _ObterPendencia(modelFilter);

                _saveFilters(modelFilter);
            }

            vm.todasPendencias = function () {

                var modelFilter = {
                };

                _ObterPendencia(modelFilter);

                _saveFilters(modelFilter);
            }

            vm.search = function (modelFilter) {


                _clearAAttributeBehavior(modelFilter);
                _ObterPendencia(modelFilter);
                _saveFilters(modelFilter);

            }


        }

        function _configCrud(resource, redirect, confirm) {

            var urlRedirect = redirect ? resource : null;
            var crud = new Crud.start();
            crud.Config = {
                Labels: PendenciaConstants.Labels,
                resource: resource,
                Execute: {
                    urlRedirect: urlRedirect,
                    confirm: confirm || "Tem certeza que deseja realizar essa operação?",
                },
                Details: {
                    pathModal: "view/Pendencia/details.html",
                }
            };
            crud.SetViewModel(vm);
            return crud;
        }

        function _ObterPendencia(filter) {



            var apiPendencia = new Api.resourse("Pendencia");
            apiPendencia.Filter = filter || {};
            apiPendencia.EnableLoading = false;
            apiPendencia.SuccessHandle = function (data) {
                vm.Pendencias.dataList = data.dataList;
            };

            apiPendencia.GetDataListCustom();
        }

        function _ObterTempos(filter) {

            vm.tempos = {};

            var apiPendenciaTempos = new Api.resourse("PendenciaTempos");
            apiPendenciaTempos.Filter = filter;
            apiPendenciaTempos.EnableLoading = false
            apiPendenciaTempos.SuccessHandle = function (data) {

                vm.tempos.dataList = data.dataList;
                vm.tempos.summary = data.summary
            };

            apiPendenciaTempos.Get();
        }


        function _saveFilters(modelFilter) {

            Cache.Add("filters-dash-assinante", JSON.stringify(modelFilter))
        }

        function _getFilters() {

            return JSON.parse(Cache.Get("filters-dash-assinante"));

        }

        function _today() {

            var today = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 0, 1, 1);
            console.log("_today",today)
            return today;
        }

        function _todayEnd() {

            var today = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 23, 59, 999);
            console.log("_todayEnd", today)
            return today;
        }

        function _clearAAttributeBehavior(modelFilter) {
            modelFilter.AttributeBehavior = "";
        }


    };
})();