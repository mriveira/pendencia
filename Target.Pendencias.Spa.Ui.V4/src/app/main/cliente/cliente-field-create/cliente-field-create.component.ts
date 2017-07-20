import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-field-create',
    templateUrl: './cliente-field-create.component.html',
    styleUrls: ['./cliente-field-create.component.css']
})
export class ClienteFieldCreateComponent implements OnInit {

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
