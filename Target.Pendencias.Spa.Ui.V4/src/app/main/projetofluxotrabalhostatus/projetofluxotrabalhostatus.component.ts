import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoFluxoTrabalhoStatusService } from './projetofluxotrabalhostatus.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService, NotificationParameters} from '../../global.service';


@Component({
    selector: 'app-projetofluxotrabalhostatus',
    templateUrl: './projetofluxotrabalhostatus.component.html',
    styleUrls: ['./projetofluxotrabalhostatus.component.css'],
})
export class ProjetoFluxoTrabalhoStatusComponent implements OnInit {

    vm: ViewModel<any>;

    operationConfimationYes: any;

    @ViewChild('filterModal') private filterModal: ModalDirective;
    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
	
    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = null;
    }

    ngOnInit() {

		this.vm = this.projetoFluxoTrabalhoStatusService.initVM();
		this.projetoFluxoTrabalhoStatusService.detectChanges(this.ref);

        this.projetoFluxoTrabalhoStatusService.get().subscribe((result) => {
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
        this.projetoFluxoTrabalhoStatusService.updateCulture(culture).then(infos => {
            this.vm.infos = infos;
            this.vm.grid = this.projetoFluxoTrabalhoStatusService.getInfoGrid(infos);
        });
    }


    public onFilter(modelFilter) {

        this.projetoFluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
            this.filterModal.hide();
        })
    }

    public onExport() {
        this.projetoFluxoTrabalhoStatusService.export().subscribe((result) => {
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
        this.projetoFluxoTrabalhoStatusService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
			 GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    public onSave(model) {

        this.projetoFluxoTrabalhoStatusService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.projetoId != result.data.projetoId &&  model.fluxoTrabalhoStatusId != result.data.fluxoTrabalhoStatusId;
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
        this.projetoFluxoTrabalhoStatusService.get(model).subscribe((result) => {
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
        this.router.navigate(['/projetofluxotrabalhostatus/print', model.projetoId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.projetoFluxoTrabalhoStatusService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.projetoId != result.data.projetoId &&  model.fluxoTrabalhoStatusId != result.data.fluxoTrabalhoStatusId;
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

        let modelFilter = this.projetoFluxoTrabalhoStatusService.pagingConfig(this.vm.modelFilter, e);

        this.projetoFluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(order) {

        let modelFilter = this.projetoFluxoTrabalhoStatusService.orderByConfig(this.vm.modelFilter, order);
        this.projetoFluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

}
