import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
    selector: 'app-cliente-field-create',
    templateUrl: './cliente-field-create.component.html',
    styleUrls: ['./cliente-field-create.component.css']
})
export class ClienteFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private clienteService: ClienteService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectclienteId(eventArgs) {
        this.vm.model.clienteId = eventArgs;
	}
	public onChangeMakeSelectnome(eventArgs) {
        this.vm.model.nome = eventArgs;
	}
	public onChangeMakeSelecttelefoneDeContato(eventArgs) {
        this.vm.model.telefoneDeContato = eventArgs;
	}
	public onChangeMakeSelectemailDeContato(eventArgs) {
        this.vm.model.emailDeContato = eventArgs;
	}
	public onChangeMakeSelectcpfcnpj(eventArgs) {
        this.vm.model.cpfcnpj = eventArgs;
	}

}
