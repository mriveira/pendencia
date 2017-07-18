import { Component, OnInit, ViewChild, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { UsuarioService } from './usuario.service';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {

    vm: any;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
    @ViewChild('formCreate') private formCreate;

    constructor(private usuarioService: UsuarioService, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {


        this.vm = this.usuarioService.initVM();

        this.usuarioService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.usuarioService.get(modelFilter).subscribe((result) => {
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
        this.usuarioService.get(model).subscribe((result) => {
            this.vm.model = result.data;
        })

    }

    public onSave(model) {

        this.usuarioService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.usuarioId != result.data.usuarioId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();

        this.usuarioService.get(model).subscribe((result) => {
            this.vm.model = result.data;
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(UsuarioId) {
        this.router.navigate(['/usuario/print', UsuarioId]);
    }

    public onDeleteConfimation(model) {

        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.usuarioService.delete({ fluxoTrabalhoStatusId: model }).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.usuarioId != result.data.usuarioId;
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

        let modelFilter = this.usuarioService.pagingConfig(this.vm.modelFilter, e);

        this.usuarioService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
