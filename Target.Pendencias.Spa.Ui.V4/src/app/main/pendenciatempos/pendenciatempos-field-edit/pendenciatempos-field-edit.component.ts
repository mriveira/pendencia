import { Component, OnInit, Input } from '@angular/core';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-field-edit',
    templateUrl: './pendenciatempos-field-edit.component.html',
    styleUrls: ['./pendenciatempos-field-edit.component.css']
})
export class PendenciaTemposFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendenciaTemposService: PendenciaTemposService) { }

    ngOnInit() {
        this.pendenciaTemposService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
        this.pendenciaTemposService.isValid(this.vm);
	}
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
        this.pendenciaTemposService.isValid(this.vm);
	}


	public isValid(vm) {
        this.pendenciaTemposService.isValid(this.vm);
    }
   
}
