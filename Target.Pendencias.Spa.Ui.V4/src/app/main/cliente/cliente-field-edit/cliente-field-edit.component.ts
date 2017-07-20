import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-field-edit',
    templateUrl: './cliente-field-edit.component.html',
    styleUrls: ['./cliente-field-edit.component.css']
})
export class ClienteFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private clienteService: ClienteService) { }

    ngOnInit() {
        this.clienteService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
        this.clienteService.isValid(this.vm);
	}


	public isValid(vm) {
        this.clienteService.isValid(this.vm);
    }
   
}
