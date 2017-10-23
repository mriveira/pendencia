import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaEventosService } from './pendenciaeventos.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService, NotificationParameters} from '../../global.service';


@Component({
    selector: 'app-pendenciaeventos',
    templateUrl: './pendenciaeventos.component.html',
    styleUrls: ['./pendenciaeventos.component.css'],
})
export class PendenciaEventosComponent implements OnInit {

    vm: ViewModel<any>;

    operationConfimationYes: any;

    @ViewChild('filterModal') private filterModal: ModalDirective;
    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
	
    constructor(private pendenciaEventosService: PendenciaEventosService, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = null;
    }

    ngOnInit() {

		this.vm = this.pendenciaEventosService.initVM();
		this.pendenciaEventosService.detectChanges(this.ref);

        this.pendenciaEventosService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });

		this.updateCulture();
        GlobalService.getChangeCultureEmitter().subscribe((culture) => {
            this.updateCulture(culture);
        });

    }

	updateCulture(culture: string = null)
    {
        this.pendenciaEventosService.updateCulture(culture).then(infos => {
            this.vm.infos = infos;
            this.vm.grid = this.pendenciaEventosService.getInfoGrid(infos);
        });
    }


    public onFilter(modelFilter) {

        this.pendenciaEventosService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
            this.filterModal.hide();
        })
    }

    public onExport() {
        this.pendenciaEventosService.export().subscribe((result) => {
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
        this.pendenciaEventosService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
			 GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    public onSave(model) {

        this.pendenciaEventosService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.pendenciaEventosId != result.data.pendenciaEventosId;
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
        this.pendenciaEventosService.get(model).subscribe((result) => {
            this.vm.details = result.dataList[0];
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
        this.router.navigate(['/pendenciaeventos/print', model.pendenciaEventosId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.pendenciaEventosService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.pendenciaEventosId != result.data.pendenciaEventosId;
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

        let modelFilter = this.pendenciaEventosService.pagingConfig(this.vm.modelFilter, e);

        this.pendenciaEventosService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(order) {

        let modelFilter = this.pendenciaEventosService.orderByConfig(this.vm.modelFilter, order);
        this.pendenciaEventosService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }
}
