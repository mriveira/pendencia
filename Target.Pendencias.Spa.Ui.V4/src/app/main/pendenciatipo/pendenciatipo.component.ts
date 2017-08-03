import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { PendenciaTipoService } from './pendenciatipo.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-pendenciatipo',
    templateUrl: './pendenciatipo.component.html',
    styleUrls: ['./pendenciatipo.component.css'],
})
export class PendenciaTipoComponent implements OnInit {

    vm: ViewModel;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;

    constructor(private pendenciaTipoService: PendenciaTipoService, private router: Router) {

        this.vm = null;
    }

    ngOnInit() {

		this.vm = this.pendenciaTipoService.initVM();

        this.pendenciaTipoService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.pendenciaTipoService.get(modelFilter).subscribe((result) => {
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
        this.pendenciaTipoService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onSave(model) {

        this.pendenciaTipoService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.pendenciaTipoId != result.data.pendenciaTipoId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();
        this.pendenciaTipoService.get(model).subscribe((result) => {
            this.vm.details = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/pendenciatipo/print', model.pendenciaTipoId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.pendenciaTipoService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.pendenciaTipoId != result.data.pendenciaTipoId;
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

        let modelFilter = this.pendenciaTipoService.pagingConfig(this.vm.modelFilter, e);

        this.pendenciaTipoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
