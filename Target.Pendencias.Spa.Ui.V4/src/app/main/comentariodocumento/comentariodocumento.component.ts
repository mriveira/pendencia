import { Component, OnInit, ViewChild, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ComentarioDocumentoService } from './comentariodocumento.service';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-comentariodocumento',
    templateUrl: './comentariodocumento.component.html',
    styleUrls: ['./comentariodocumento.component.css'],
})
export class ComentarioDocumentoComponent implements OnInit {

    vm: any;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
    @ViewChild('formCreate') private formCreate;

    constructor(private comentarioDocumentoService: ComentarioDocumentoService, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {


        this.vm = this.comentarioDocumentoService.initVM();

        this.comentarioDocumentoService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.comentarioDocumentoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })
    }

    public onExport() {


    }

    public onCreate() {

        this.vm.model = {};
        this.saveModal.show();
    }

    public onEdit(model) {

        this.editModal.show();
        this.comentarioDocumentoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onSave(model) {

        this.comentarioDocumentoService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.documentoId != result.data.documentoId &&  model.comentarioId != result.data.comentarioId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();
        this.comentarioDocumentoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/comentariodocumento/print', model.documentoId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.comentarioDocumentoService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.documentoId != result.data.documentoId &&  model.comentarioId != result.data.comentarioId;
                    });
                    this.vm.summary.total = this.vm.filterResult.length
                });
            },
            this.vm.messageConfirmation
        );

        GlobalService.operationExecuted.emit(conf);
    }

    public onConfimationYes() {
        this.operationConfimationYes();
    }

    public onPageChanged(e) {

        let modelFilter = this.comentarioDocumentoService.pagingConfig(this.vm.modelFilter, e);

        this.comentarioDocumentoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
