import { Component, OnInit, Input, ViewChild, EventEmitter, OnDestroy } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../../pendencia/pendencia.service';
import { PendenciaDocumentoService } from '../../pendenciadocumento/pendenciadocumento.service';
import { ProjetoDocumentoService } from '../../projetodocumento/projetodocumento.service';
import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-detalhes-modal',
    templateUrl: './detalhes-modal.component.html',
    styleUrls: ['./detalhes-modal.component.css']
})
export class DetalhesModalComponent implements OnInit, OnDestroy {

    vm: ViewModel<any>;
    @ViewChild('detalhesModal') private detalhesModal: ModalDirective;

    _id: number;
    title: string;
    subscriptionNotification: EventEmitter<NotificationParameters>;
    tags: any;

    constructor(private pendenciaService: PendenciaService, private pendenciaDocumentoService: PendenciaDocumentoService, private projetoDocumentoService: ProjetoDocumentoService) {

        this.vm = this.pendenciaService.initVM();
    }

    ngOnInit() {

        this.subscriptionNotification = GlobalService.getNotificationEmitter().subscribe((not) => {
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

            this.pendenciaDocumentoService.get({ pendenciaId: this.vm.details.pendenciaId })
                .map((response) => {
                    return response.dataList.map((item) => {
                        item.documento.tags = this.pendenciaService.tagTransformToShow(item.documento.tags);
                        return item;
                    })
                })
                .subscribe((responsePendenciaDocumento) => {
                    this.vm.details.collectionPendenciaDocumento = responsePendenciaDocumento;
                })

            this.projetoDocumentoService.get({ projetoId: this.vm.details.projetoId })
                .map((response) => {
                    return response.dataList.map((item) => {
                        item.documento.tags = this.pendenciaService.tagTransformToShow(item.documento.tags);
                        return item;
                    })
                })
                .subscribe((responseProjetoDocumento) => {
                    this.vm.details.collectionProjetoDocumento = responseProjetoDocumento;
                })

        });
        this.detalhesModal.show();
    }


    onCancel() {
        this.detalhesModal.hide();
    }

    ngOnDestroy() {
        this.subscriptionNotification.unsubscribe();
    }

}
