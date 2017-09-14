﻿import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { ComentarioService } from '../../comentario/comentario.service';
import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-historico-modal',
    templateUrl: './historico-modal.component.html',
    styleUrls: ['./historico-modal.component.css']
})
export class HistoricoModalComponent implements OnInit {

    vm: ViewModel<any>;
    @ViewChild('historicoModal') private historicoModal: ModalDirective;

    _pendenciaId: number;
    title: string;

    constructor(private comentarioService: ComentarioService) {
        this.vm = this.comentarioService.initVM();
    }

    ngOnInit() {

        this.vm.reletedViewModel = {
            comentarios: []
        }

        GlobalService.notification.subscribe((not) => {
            if (not.event == "historicoPendencia") {
                this.title = "Histórico";
                this.show(not.data.id);
            }
        });
    }

    show(pendenciaId: number) {

        this._pendenciaId = pendenciaId;
        this.comentarioService.get({ pendenciaId: pendenciaId }).subscribe((response) => {
            this.vm.reletedViewModel.comentarios = response.dataList;
        });
        this.historicoModal.show();
    }

    onCancel() {
        this.historicoModal.hide();
    }

}
