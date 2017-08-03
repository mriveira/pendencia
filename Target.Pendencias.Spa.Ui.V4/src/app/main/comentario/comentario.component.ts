import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ComentarioService } from './comentario.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';


@Component({
    selector: 'app-comentario',
    templateUrl: './comentario.component.html',
    styleUrls: ['./comentario.component.css'],
})
export class ComentarioComponent implements OnInit {

    vm: ViewModel;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;

    constructor(private comentarioService: ComentarioService, private router: Router) {

        this.vm = null;
    }

    ngOnInit() {

		this.vm = this.comentarioService.initVM();

        this.comentarioService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })

    }


    public onFilter(modelFilter) {

        this.comentarioService.get(modelFilter).subscribe((result) => {
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
        this.comentarioService.get(model).subscribe((result) => {
            this.vm.model = result.dataList[0];
        })

    }

    public onSave(model) {

        this.comentarioService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.comentarioId != result.data.comentarioId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length
        });

        this.saveModal.hide();
        this.editModal.hide();
    }

    public onDetails(model) {

        this.detailsModal.show();
        this.comentarioService.get(model).subscribe((result) => {
            this.vm.details = result.dataList[0];
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }


    public onPrint(model) {
        this.router.navigate(['/comentario/print', model.comentarioId]);
    }

    public onDeleteConfimation(model) {



        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.comentarioService.delete(model).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.comentarioId != result.data.comentarioId;
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

        let modelFilter = this.comentarioService.pagingConfig(this.vm.modelFilter, e);

        this.comentarioService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(field) {
        
    }

}
