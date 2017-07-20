import { Component, OnInit, Input } from '@angular/core';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-field-create',
    templateUrl: './pendenciaeventos-field-create.component.html',
    styleUrls: ['./pendenciaeventos-field-create.component.css']
})
export class PendenciaEventosFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private pendenciaEventosService: PendenciaEventosService) { }

    ngOnInit() {
        this.pendenciaEventosService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
        this.pendenciaEventosService.isValid(this.vm);
	}


	public isValid(vm) {
        this.pendenciaEventosService.isValid(this.vm);
    }

}
