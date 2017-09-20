import { Component, OnInit, SecurityContext, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../pendencia/pendencia.service';
import { PendenciaTemposService } from '../pendenciatempos/pendenciatempos.service';
import { GlobalService, NotificationParameters } from '../../global.service';
import { CacheService } from 'app/common/services/cache.service';
import { ECacheType } from 'app/common/type-cache.enum';


@Component({
    selector: 'app-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit, OnDestroy {

    vm: ViewModel<any>;
    projetoId: number;
    randomDefault: number;
    deveMostrarLogs: boolean;
    sub: any;


    constructor(private pendenciaService: PendenciaService, private pendenciaTemposService: PendenciaTemposService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {

        this.vm = this.pendenciaService.initVM();
        this.projetoId = 0;
        this.randomDefault = Math.random();

    }

    san(fileName) {
        var _url = "url('" + this.vm.downloadUri + "/usuario/" + fileName + "')";
        return this.sanitizer.sanitize(SecurityContext.HTML, _url)
    }
    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.projetoId = params['id'];
        });

        this.vm.reletedViewModel = {
            pendencias: [],
            tempo: {
                tempos: [],
                summary: {
                    additionalSummary: {
                        totalHoras: 0
                    }
                }
            }
        }

        let savedFilters = this._getFilters();
        if (savedFilters)
            this.vm.modelFilter = savedFilters;

        this._obterPendencias(this.vm.modelFilter);
        this._obterTempos()

        GlobalService.getNotificationEmitter().subscribe((not) => {
            if (not.event == "filter") {
                this._obterPendencias({
                    resumo: not.data.filter
                });
            }

        })
    }

    onMinhasPendencias() {
        this.onFilter({
            AttributeBehavior: "MinhasPendencias"
        })
    }

    onTodasPendencias() {
        this.onFilter({})
    }

    onFilter(modelFilter) {

        this._obterPendencias(modelFilter);
        this._saveFilters(modelFilter)
    }

    onReclassificarWithNotes(id: number) {
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("reclassificarPendencia", {
            id: id,
        }));
    }

    onComentar(id: number) {
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("comentarPendencia", {
            id: id,
        }));
    }

    onConcluirWithNotes(id: number) {
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("concluirPendencia", {
            id: id,
        }));
    }

    onStopWithNotes(id: number) {
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("pararPendencia", {
            id: id,
        }));
    }

    onTimeSheetEdit(id: number) {
        console.log("onTimeSheetEdit")
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("timeSheetEdit", {
            id: id,
        }));
    }

    onPlay(id: number) {

        var newModel = {
            attributeBehavior: "Play",
            pendenciaId: id
        };

        var confirm = "Tem certeza de que deseja iniciar essa pendência?";
        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.pendenciaService.save(newModel).subscribe((result) => {
                    this._obterTempos()
                    this._obterPendencias(this.vm.modelFilter)
                });
            }, confirm
        );
        GlobalService.getOperationExecutedEmitter().emit(conf);
    }

    onHistorico(id: number) {
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("historicoPendencia", {
            id: id,
        }));
    }

    onDetalhes(id: number) {
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("detalhesPendencia", {
            id: id,
        }));
    }

    _obterPendencias(filter) {

        this.pendenciaService.getDataListCustom(filter).subscribe((response) => {
            this.vm.reletedViewModel.pendencias = response.dataList;
        });
    }

    _obterTempos() {
        this.pendenciaTemposService.get({
            attributeBehavior: "TimeSheet",
        }).subscribe((response) => {
            this.vm.reletedViewModel.tempo.tempos = response.dataList;
            this.vm.reletedViewModel.tempo.summary = response.summary;
        });
    }

    _saveFilters(modelFilter) {
        CacheService.add("filters-dash-timesheet", JSON.stringify(modelFilter), ECacheType.COOKIE);
        this.vm.modelFilter = modelFilter;
    }

    _getFilters() {
        return JSON.parse(CacheService.get("filters-dash-timesheet", ECacheType.COOKIE));
    }

    ngOnDestroy() {

    }

}
