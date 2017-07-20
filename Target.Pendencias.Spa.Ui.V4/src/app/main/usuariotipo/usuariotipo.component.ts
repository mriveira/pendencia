import { Component, OnInit, ViewChild, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { UsuarioTipoService } from './usuariotipo.service';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-usuariotipo',
    templateUrl: './usuariotipo.component.html',
    styleUrls: ['./usuariotipo.component.css'],
})
export class UsuarioTipoComponent implements OnInit {

    vm: any;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
    @ViewChild('formCreate') private formCreate;

    constructor(private usuarioTipoService: UsuarioTipoService, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {


        this.vm = this.usuarioTipoService.initVM();

        this.usuarioTipoService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.usuarioTipoService.get(modelFilter).subscribe((result) => {
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
        this.usuarioTipoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onSave(model) {

        this.usuarioTipoService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.usuarioTipoId != result.data.usuarioTipoId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();
        this.usuarioTipoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/usuariotipo/print', model.usuarioTipoId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.usuarioTipoService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.usuarioTipoId != result.data.usuarioTipoId;
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

        let modelFilter = this.usuarioTipoService.pagingConfig(this.vm.modelFilter, e);

        this.usuarioTipoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
