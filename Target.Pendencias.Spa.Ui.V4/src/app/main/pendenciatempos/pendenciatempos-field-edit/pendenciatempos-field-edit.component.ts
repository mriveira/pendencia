import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-field-edit',
    templateUrl: './pendenciatempos-field-edit.component.html',
    styleUrls: ['./pendenciatempos-field-edit.component.css']
})
export class PendenciaTemposFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendenciaTemposService: PendenciaTemposService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectpendenciaTemposId(eventArgs) {
        this.vm.model.pendenciaTemposId = eventArgs;
	}
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
	}
	public onChangeMakeSelectinicio(eventArgs) {
        this.vm.model.inicio = eventArgs;
	}
	public onChangeMakeSelectfim(eventArgs) {
        this.vm.model.fim = eventArgs;
	}
	public onChangeMakeSelectnota(eventArgs) {
        this.vm.model.nota = eventArgs;
	}
   
}
