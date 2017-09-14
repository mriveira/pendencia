import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../../pendencia/pendencia.service';
import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-detalhes-modal',
    templateUrl: './detalhes-modal.component.html',
    styleUrls: ['./detalhes-modal.component.css']
})
export class DetalhesModalComponent implements OnInit {

    vm: ViewModel<any>;
    @ViewChild('detalhesModal') private detalhesModal: ModalDirective;

    _id: number;
    title: string;

    constructor(private pendenciaService : PendenciaService) {
        
        this.vm = this.pendenciaService.initVM();
    }

    ngOnInit() {
        
        GlobalService.notification.subscribe((not) => {
            if (not.event == "detalhesPendencia") {
                this.title = "Detalhes";
                this.show(not.data.id);
            }
        });

    }

    show(id: number) {

        this._id = id;
        this.pendenciaService.get({ id: this._id }).subscribe((response) => {
            this.vm.details = response.data;
        });
        this.detalhesModal.show();
    }

    onCancel() {
        this.detalhesModal.hide();
    }

}
