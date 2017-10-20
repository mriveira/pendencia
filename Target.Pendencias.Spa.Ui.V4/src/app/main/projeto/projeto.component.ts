import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoService } from './projeto.service';
import { ProjetoDocumentoService } from '../projetodocumento/projetodocumento.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService, NotificationParameters } from '../../global.service';


@Component({
    selector: 'app-projeto',
    templateUrl: './projeto.component.html',
    styleUrls: ['./projeto.component.css'],
})
export class ProjetoComponent implements OnInit {

    vm: ViewModel<any>;

    operationConfimationYes: any;

    @ViewChild('filterModal') private filterModal: ModalDirective;
    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;

    customButton: any[];

    constructor(private projetoService: ProjetoService, private router: Router, private ref: ChangeDetectorRef, private projetoDocumentoService: ProjetoDocumentoService) {

        this.vm = null;
        this.customButton = [{ class: 'btn-secondary', title: 'adicionar documentos', icon: 'fa-file', click: (model) => this.onAttach(model) }]
    }

    ngOnInit() {

        this.vm = this.projetoService.initVM();
        this.projetoService.detectChanges(this.ref);

        this.projetoService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });

        this.updateCulture();
        GlobalService.getChangeCultureEmitter().subscribe((culture) => {
            this.updateCulture(culture);
        });

    }

    updateCulture(culture: string = null) {
        this.projetoService.updateCulture(culture).then(infos => {
            this.vm.infos = infos;
            this.vm.grid = this.projetoService.getInfoGrid(infos);
        });
    }


    public onFilter(modelFilter) {

        this.projetoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
            this.filterModal.hide();
        })
    }

    public onExport() {
        this.projetoService.export().subscribe((result) => {
            var blob = new Blob([result._body], {
                type: 'application/vnd.ms-excel'
            });
            var downloadUrl = window.URL.createObjectURL(blob);
            window.location.href = downloadUrl;
        })
    }

    public onCreate() {

        this.vm.model = {};
        this.saveModal.show();
    }

    public onEdit(model) {

        this.editModal.show();
        this.projetoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];

            GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    public onSave(model) {

        this.projetoService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return model.projetoId != result.data.projetoId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length

            if (!this.vm.manterTelaAberta) {
                this.saveModal.hide();
                this.editModal.hide();
            }

        });

    }

    public onDetails(model) {

        this.detailsModal.show();
        this.projetoService.get(model).subscribe((result) => {
            this.vm.details = result.dataList[0];


            this.projetoDocumentoService.get({ projetoId: this.vm.details.projetoId }).subscribe((responseProjetoDocumento) => {
                this.vm.details.collectionProjetoDocumento = responseProjetoDocumento.dataList;
            })
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
        this.filterModal.hide();
    }

    public onShowFilter() {
        this.filterModal.show();
    }

    public onClearFilter() {
        this.vm.modelFilter = {};
    }

    public onPrint(model) {
        this.router.navigate(['/projeto/print', model.projetoId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.projetoService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return model.projetoId != result.data.projetoId;
                    });
                    this.vm.summary.total = this.vm.filterResult.length
                });
            }
        );

        GlobalService.getOperationExecutedEmitter().emit(conf);
    }

    public onConfimationYes() {
        this.operationConfimationYes();
    }

    public onPageChanged(e) {

        let modelFilter = this.projetoService.pagingConfig(this.vm.modelFilter, e);

        this.projetoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(order) {

        let modelFilter = this.projetoService.orderByConfig(this.vm.modelFilter, order);
        this.projetoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onAttach(model) {
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("projetoDocumento", {
            id: model.projetoId,
        }, ["init"]));
    }

}
