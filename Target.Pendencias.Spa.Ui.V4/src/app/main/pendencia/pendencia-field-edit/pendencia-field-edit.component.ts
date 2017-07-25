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

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectprojetoId(eventArgs) {
        this.vm.model.projetoId = eventArgs;
	}
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}
	public onChangeMakeSelectresumo(eventArgs) {
        this.vm.model.resumo = eventArgs;
	}
	public onChangeMakeSelectdescricao(eventArgs) {
        this.vm.model.descricao = eventArgs;
	}
	public onChangeMakeSelectrequisitadoPor(eventArgs) {
        this.vm.model.requisitadoPor = eventArgs;
	}
	public onChangeMakeSelecttempoEstimado(eventArgs) {
        this.vm.model.tempoEstimado = eventArgs;
	}
	public onChangeMakeSelectpontosEstimados(eventArgs) {
        this.vm.model.pontosEstimados = eventArgs;
	}
	public onChangeMakeSelectprazo(eventArgs) {
        this.vm.model.prazo = eventArgs;
	}
	public onChangeMakeSelectpendenciaTipoId(eventArgs) {
        this.vm.model.pendenciaTipoId = eventArgs;
	}
	public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.model.fluxoTrabalhoStatusId = eventArgs;
	}
	public onChangeMakeSelectpendenciaPrioridadeId(eventArgs) {
        this.vm.model.pendenciaPrioridadeId = eventArgs;
	}
	public onChangeMakeSelecttags(eventArgs) {
        this.vm.model.tags = eventArgs;
	}
   
}
