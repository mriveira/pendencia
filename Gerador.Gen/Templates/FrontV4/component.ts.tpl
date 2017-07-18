import { Component, OnInit, ViewChild, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { <#className#>Service } from './<#classNameLowerAndSeparator#>.service';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-<#classNameLowerAndSeparator#>',
    templateUrl: './<#classNameLowerAndSeparator#>.component.html',
    styleUrls: ['./<#classNameLowerAndSeparator#>.component.css'],
})
export class <#className#>Component implements OnInit {

    vm: any;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
    @ViewChild('formCreate') private formCreate;

    constructor(private <#classNameInstance#>Service: <#className#>Service, private router: Router) {

        this.vm = {};
    }

    ngOnInit() {


        this.vm = this.<#classNameInstance#>Service.initVM();

        this.<#classNameInstance#>Service.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.<#classNameInstance#>Service.get(modelFilter).subscribe((result) => {
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
        this.<#classNameInstance#>Service.get(model).subscribe((result) => {
            this.vm.model = result.data;
        })

    }

    public onSave(model) {

        this.<#classNameInstance#>Service.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return <#ExpressionKeyNames#>;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();

        this.<#classNameInstance#>Service.get(model).subscribe((result) => {
            this.vm.model = result.data;
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(<#KeyName#>) {
        this.router.navigate(['/<#classNameLower#>/print', <#KeyName#>]);
    }

    public onDeleteConfimation(model) {

        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.<#classNameInstance#>Service.delete({ fluxoTrabalhoStatusId: model }).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return <#ExpressionKeyNames#>;
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

        let modelFilter = this.<#classNameInstance#>Service.pagingConfig(this.vm.modelFilter, e);

        this.<#classNameInstance#>Service.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
