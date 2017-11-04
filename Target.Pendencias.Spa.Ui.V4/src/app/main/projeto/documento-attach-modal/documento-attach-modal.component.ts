import { Component, OnInit, Input, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoDocumentoService } from '../../projetodocumento/projetodocumento.service';
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

    constructor(private projetoDocumentoService: ProjetoDocumentoService) {
        this.form = new FormGroup({
            tags: new FormControl()
        });
        this.vm = null;
    }

    ngOnInit() {
        this.vm = this.projetoDocumentoService.initVM();
        this.subscriptionNotification = GlobalService.getNotificationEmitter().subscribe((not) => {
            if (not.event == "projetoDocumento") {
                this.title = "Documentos";
                this.show(not.data.id);
            }
        });
    }

    show(id: number) {
        console.log("show", id);
        this._id = id;
        this.documentAttachModal.show();
    }

    onSave(model) {

        var extIndex = model.documento.split('.').length - 1;
        var tags = this.projetoDocumentoService.tagTransformToSave(model.tagitems);

        var newModel = Object.assign(model, {
            projetoId: this._id,
            attributeBehavior: "ProjetoDocumento",
            documento: {
                arquivo: model.documento,
                ext: model.documento.split('.')[extIndex],
                tags: tags
            }
        })

        this.projetoDocumentoService.save(newModel).subscribe((response) => {
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
