import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProjetoFluxoTrabalhoStatusService } from './projetofluxotrabalhostatus.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-projetofluxotrabalhostatus',
    templateUrl: './projetofluxotrabalhostatus.component.html',
    styleUrls: ['./projetofluxotrabalhostatus.component.css'],
})
export class ProjetoFluxoTrabalhoStatusComponent implements OnInit {

    vm: ViewModel;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;

    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private router: Router) {

        this.vm = null;
    }

    ngOnInit() {

		this.vm = this.projetoFluxoTrabalhoStatusService.initVM();

        this.projetoFluxoTrabalhoStatusService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.projetoFluxoTrabalhoStatusService.get(modelFilter).subscribe((result) => {
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
        this.projetoFluxoTrabalhoStatusService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onSave(model) {

        this.projetoFluxoTrabalhoStatusService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.projetoId != result.data.projetoId &&  model.fluxoTrabalhoStatusId != result.data.fluxoTrabalhoStatusId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();
        this.projetoFluxoTrabalhoStatusService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
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

        GlobalService.operationExecuted.emit(conf);
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

    public onOrderBy(field) {
        
    }

}
