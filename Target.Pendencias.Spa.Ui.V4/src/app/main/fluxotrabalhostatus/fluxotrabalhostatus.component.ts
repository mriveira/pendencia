import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoStatusService } from './fluxotrabalhostatus.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService, NotificationParameters} from '../../global.service';


@Component({
    selector: 'app-fluxotrabalhostatus',
    templateUrl: './fluxotrabalhostatus.component.html',
    styleUrls: ['./fluxotrabalhostatus.component.css'],
})
export class FluxoTrabalhoStatusComponent implements OnInit {

    vm: ViewModel<any>;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
	
    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = null;
    }

    ngOnInit() {

		this.vm = this.fluxoTrabalhoStatusService.initVM();
		this.fluxoTrabalhoStatusService.detectChanges(this.ref);

        this.fluxoTrabalhoStatusService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });

		this.updateCulture();
        GlobalService.changeCulture.subscribe((culture) => {
            this.updateCulture(culture);
        });

    }

	updateCulture(culture: string = null)
    {
        this.fluxoTrabalhoStatusService.updateCulture(culture).then(infos => {
            this.vm.infos = infos;
            this.vm.grid = this.fluxoTrabalhoStatusService.getInfoGrid(infos);
        });
    }


    public onFilter(modelFilter) {

        this.fluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })
    }

    public onExport() {
        this.fluxoTrabalhoStatusService.export().subscribe((result) => {
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
        this.fluxoTrabalhoStatusService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
			 GlobalService.notification.emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

    }

    public onSave(model) {

        this.fluxoTrabalhoStatusService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.fluxoTrabalhoStatusId != result.data.fluxoTrabalhoStatusId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length

			this.saveModal.hide();
	        this.editModal.hide();

        });

    }

    public onDetails(model) {

        this.detailsModal.show();
        this.fluxoTrabalhoStatusService.get(model).subscribe((result) => {
            this.vm.details = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/fluxotrabalhostatus/print', model.fluxoTrabalhoStatusId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.fluxoTrabalhoStatusService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.fluxoTrabalhoStatusId != result.data.fluxoTrabalhoStatusId;
                    });
                    this.vm.summary.total = this.vm.filterResult.length
                });
            }
        );

        GlobalService.operationExecuted.emit(conf);
    }

    public onConfimationYes() {
        this.operationConfimationYes();
    }

    public onPageChanged(e) {

        let modelFilter = this.fluxoTrabalhoStatusService.pagingConfig(this.vm.modelFilter, e);

        this.fluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
