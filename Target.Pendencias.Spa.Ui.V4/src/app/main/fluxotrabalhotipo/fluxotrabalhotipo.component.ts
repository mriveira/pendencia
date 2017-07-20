import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { FluxoTrabalhoTipoService } from './fluxotrabalhotipo.service';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-fluxotrabalhotipo',
    templateUrl: './fluxotrabalhotipo.component.html',
    styleUrls: ['./fluxotrabalhotipo.component.css'],
})
export class FluxoTrabalhoTipoComponent implements OnInit {

    vm: any;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;

    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {


        this.vm = this.fluxoTrabalhoTipoService.initVM();

        this.fluxoTrabalhoTipoService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.fluxoTrabalhoTipoService.get(modelFilter).subscribe((result) => {
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
        this.fluxoTrabalhoTipoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onSave(model) {

        this.fluxoTrabalhoTipoService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.fluxoTrabalhoTipoId != result.data.fluxoTrabalhoTipoId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();
        this.fluxoTrabalhoTipoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/fluxotrabalhotipo/print', model.fluxoTrabalhoTipoId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.fluxoTrabalhoTipoService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.fluxoTrabalhoTipoId != result.data.fluxoTrabalhoTipoId;
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

        let modelFilter = this.fluxoTrabalhoTipoService.pagingConfig(this.vm.modelFilter, e);

        this.fluxoTrabalhoTipoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
