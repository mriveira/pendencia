import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoDocumentoService } from './projetodocumento.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService, NotificationParameters} from '../../global.service';


@Component({
    selector: 'app-projetodocumento',
    templateUrl: './projetodocumento.component.html',
    styleUrls: ['./projetodocumento.component.css'],
})
export class ProjetoDocumentoComponent implements OnInit {

    vm: ViewModel<any>;

    operationConfimationYes: any;

    @ViewChild('filterModal') private filterModal: ModalDirective;
    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
	
    constructor(private projetoDocumentoService: ProjetoDocumentoService, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = null;
    }

    ngOnInit() {

		this.vm = this.projetoDocumentoService.initVM();
		this.projetoDocumentoService.detectChanges(this.ref);

        this.projetoDocumentoService.get().subscribe((result) => {
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
        this.projetoDocumentoService.updateCulture(culture).then(infos => {
            this.vm.infos = infos;
            this.vm.grid = this.projetoDocumentoService.getInfoGrid(infos);
        });
    }


    public onFilter(modelFilter) {

        this.projetoDocumentoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
            this.filterModal.hide();
        })
    }

    public onExport() {
        this.projetoDocumentoService.export().subscribe((result) => {
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
		GlobalService.getNotificationEmitter().emit(new NotificationParameters("create", {
            model: this.vm.model
        }));
    }

    public onEdit(model) {

        this.editModal.show();
        this.projetoDocumentoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
			 GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    public onSave(model) {

        this.projetoDocumentoService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.projetoId != result.data.projetoId &&  model.documentoId != result.data.documentoId;
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
        this.projetoDocumentoService.get(model).subscribe((result) => {
            this.vm.details = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
        this.filterModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/projetodocumento/print', model.projetoId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.projetoDocumentoService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.projetoId != result.data.projetoId &&  model.documentoId != result.data.documentoId;
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

        let modelFilter = this.projetoDocumentoService.pagingConfig(this.vm.modelFilter, e);

        this.projetoDocumentoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(order) {

        let modelFilter = this.projetoDocumentoService.orderByConfig(this.vm.modelFilter, order);
        this.projetoDocumentoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

}
