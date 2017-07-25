import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cliente-filter',
    templateUrl: './cliente-filter.component.html',
    styleUrls: ['./cliente-filter.component.css']
})
export class ClienteFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectclienteId(eventArgs) {
        this.vm.modelFilter.clienteId = eventArgs;
	}
public onChangeMakeSelectnome(eventArgs) {
        this.vm.modelFilter.nome = eventArgs;
	}
public onChangeMakeSelecttelefoneDeContato(eventArgs) {
        this.vm.modelFilter.telefoneDeContato = eventArgs;
	}
public onChangeMakeSelectemailDeContato(eventArgs) {
        this.vm.modelFilter.emailDeContato = eventArgs;
	}
public onChangeMakeSelectcpfcnpj(eventArgs) {
        this.vm.modelFilter.cpfcnpj = eventArgs;
	}

}
