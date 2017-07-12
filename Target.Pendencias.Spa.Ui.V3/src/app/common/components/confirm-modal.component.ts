import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'confirm-modal',
    template: `
              <div bsModal #confirmModal="bs-modal" class="gc-modal modal fade">
                  <div class="modal-header">
                      <h3 class="modal-title">Confirmação</h3>
                  </div>
                  <div class="modal-body">
                      {{ message }}
                  </div>
                  <div class="modal-footer">
                      <button class="btn btn-danger" type="button" ng-click="onYes()">Sim</button>
                      <button class="btn btn-default" type="button" ng-click="onCancel()">Cancelar</button>
                  </div>
               </div>
`,
})
export class ConfirmModalComponent implements OnInit {


    @Input() message: string;
    @Output() cmConfirm = new EventEmitter<boolean>();

    //@ViewChild('confirmModal') private confirmModal: ModalDirective;

    constructor() {

    }


    ngOnInit() {

    }

    show() {
        //this.confirmModal.show();
    }

    onYes() {
        this.cmConfirm.emit(true);
        //this.confirmModal.hide();
    }

    onCancel() {
        this.cmConfirm.emit(false);
        //this.confirmModal.hide();
    }

}
