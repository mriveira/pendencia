import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../../pendencia/pendencia.service';
import { GlobalService, NotificationParameters } from '../../../global.service';

@Component({
    selector: 'app-reclassificar-modal',
    templateUrl: './reclassificar-modal.component.html',
    styleUrls: ['./reclassificar-modal.component.css']
})
export class ReclassificarModalComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    @ViewChild('reclassificarModal') private reclassificarModal: ModalDirective;

    _id: number;
    title: string;
    form: FormGroup;

    constructor(private pendenciaService: PendenciaService) {
        this.form = new FormGroup({
            fluxoTrabalhoStatusId: new FormControl(),
            comentario: new FormControl()
        });
    }

    ngOnInit() {
        GlobalService.notification.subscribe((not) => {
            if (not.event == "reclassificarPendencia") {
                this.title = "Reclassificar";
                this.show(not.data.id);
            }
        });
    }

    show(id: number) {
        this._id = id;
        this.reclassificarModal.show();
    }

    onSave(model) {

        var newModel = Object.assign(model, {
            pendenciaId: this._id,
            fluxoTrabalhoStatusId: model.fluxoTrabalhoStatusId,
            attributeBehavior: "Reclassificar",
            collectionComentarios: [{
                Descricao: model != null ? model.comentario : null
            }]
        })

        this.pendenciaService.save(newModel).subscribe((response) => {
            this._obterPendencias(this.vm.modelFilter);
            this.reclassificarModal.hide();
        })

    }
    _obterPendencias(filter) {
        this.pendenciaService.getDataListCustom(filter).subscribe((response) => {
            this.vm.reletedViewModel.pendencias = response.dataList;
        });
    }
    onCancel() {
        this.reclassificarModal.hide();
    }

}
