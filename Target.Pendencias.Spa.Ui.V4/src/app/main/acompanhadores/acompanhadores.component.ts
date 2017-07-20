import { Component, OnInit, ViewChild, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { AcompanhadoresService } from './acompanhadores.service';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-acompanhadores',
    templateUrl: './acompanhadores.component.html',
    styleUrls: ['./acompanhadores.component.css'],
})
export class AcompanhadoresComponent implements OnInit {

    vm: any;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
    @ViewChild('formCreate') private formCreate;

    constructor(private acompanhadoresService: AcompanhadoresService, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {


        this.vm = this.acompanhadoresService.initVM();

        this.acompanhadoresService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.acompanhadoresService.get(modelFilter).subscribe((result) => {
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
        this.acompanhadoresService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onSave(model) {

        this.acompanhadoresService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.pendenciaId != result.data.pendenciaId &&  model.usuarioId != result.data.usuarioId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();
        this.acompanhadoresService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/acompanhadores/print', model.pendenciaId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.acompanhadoresService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.pendenciaId != result.data.pendenciaId &&  model.usuarioId != result.data.usuarioId;
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

        let modelFilter = this.acompanhadoresService.pagingConfig(this.vm.modelFilter, e);

        this.acompanhadoresService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
