import { Component, OnInit, Input, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaDocumentoService } from '../../pendenciadocumento/pendenciadocumento.service';
import { PendenciaTemposService } from '../../pendenciatempos/pendenciatempos.service';

import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-documento-attach-modal',
    templateUrl: './documento-attach-modal.component.html',
    styleUrls: ['./documento-attach-modal.component.css']
})
export class DocumentAttachModalComponent implements OnInit, OnDestroy {

    vm: ViewModel<any>;
    @ViewChild('documentAttachModal') private documentAttachModal: ModalDirective;

    _id: number;
    title: string;
    form: FormGroup;
    subscriptionNotification: EventEmitter<NotificationParameters>;

    constructor(private pendenciaDocumentoService: PendenciaDocumentoService) {
        this.form = new FormGroup({ nota: new FormControl() });
        this.vm = null;
    }

    ngOnInit() {
        this.vm = this.pendenciaDocumentoService.initVM();
        this.subscriptionNotification = GlobalService.getNotificationEmitter().subscribe((not) => {
            if (not.event == "pendenciaDocumento") {
                this.title = "Documentos";
                this.show(not.data.id);
            }
        });
    }

    show(id: number) {
        this._id = id;
        this.documentAttachModal.show();
    }

    onSave(model) {

        var extIndex = model.documento.split('.').length - 1;

        var newModel = Object.assign(model, {
            pendenciaId: this._id,
            attributeBehavior: "PendenciaDocumento",
            documento: {
                arquivo: model.documento,
                ext: model.documento.split('.')[extIndex]
            }
        })

        this.pendenciaDocumentoService.save(newModel).subscribe((response) => {
            this.documentAttachModal.hide();
        });

    }

    onCancel() {
        this.documentAttachModal.hide();
    }

    ngOnDestroy() {
        this.subscriptionNotification.unsubscribe();
    }
}
