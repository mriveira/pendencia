import { Component, OnInit, Input } from '@angular/core';
import { PendenciaTemposService } from '../pendenciatempos.service';

@Component({
    selector: 'app-pendenciatempos-field-create',
    templateUrl: './pendenciatempos-field-create.component.html',
    styleUrls: ['./pendenciatempos-field-create.component.css']
})
export class PendenciaTemposFieldCreateComponent implements OnInit {

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
