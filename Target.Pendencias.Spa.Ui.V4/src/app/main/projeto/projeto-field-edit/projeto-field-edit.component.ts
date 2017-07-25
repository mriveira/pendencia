import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'app-projeto-field-edit',
    templateUrl: './projeto-field-edit.component.html',
    styleUrls: ['./projeto-field-edit.component.css']
})
export class ProjetoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private projetoService: ProjetoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectprojetoId(eventArgs) {
        this.vm.model.projetoId = eventArgs;
	}
	public onChangeMakeSelectnome(eventArgs) {
        this.vm.model.nome = eventArgs;
	}
	public onChangeMakeSelectdescricao(eventArgs) {
        this.vm.model.descricao = eventArgs;
	}
	public onChangeMakeSelectvisao(eventArgs) {
        this.vm.model.visao = eventArgs;
	}
	public onChangeMakeSelectclienteId(eventArgs) {
        this.vm.model.clienteId = eventArgs;
	}
	public onChangeMakeSelectchaveUnica(eventArgs) {
        this.vm.model.chaveUnica = eventArgs;
	}
	public onChangeMakeSelectinicio(eventArgs) {
        this.vm.model.inicio = eventArgs;
	}
	public onChangeMakeSelectfim(eventArgs) {
        this.vm.model.fim = eventArgs;
	}
   
}
