import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-field-edit',
    templateUrl: './pendencia-field-edit.component.html',
    styleUrls: ['./pendencia-field-edit.component.css']
})
export class PendenciaFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendenciaService: PendenciaService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        
	 public onEditorKeyupdescricao(model) {

        this.vm.model.descricao = model;
    }
   
}
