import { Component, OnInit, Input } from '@angular/core';
import { PendenciaService } from '../pendencia.service';

@Component({
    selector: 'app-pendencia-field-create',
    templateUrl: './pendencia-field-create.component.html',
    styleUrls: ['./pendencia-field-create.component.css']
})
export class PendenciaFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private pendenciaService: PendenciaService) { }

    ngOnInit() {
        this.pendenciaService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectprojetoId(eventArgs) {
        this.vm.model.projetoId = eventArgs;
        this.pendenciaService.isValid(this.vm);
	}
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
        this.pendenciaService.isValid(this.vm);
	}
	public onChangeMakeSelectpendenciaTipoId(eventArgs) {
        this.vm.model.pendenciaTipoId = eventArgs;
        this.pendenciaService.isValid(this.vm);
	}
	public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.model.fluxoTrabalhoStatusId = eventArgs;
        this.pendenciaService.isValid(this.vm);
	}
	public onChangeMakeSelectpendenciaPrioridadeId(eventArgs) {
        this.vm.model.pendenciaPrioridadeId = eventArgs;
        this.pendenciaService.isValid(this.vm);
	}


	public isValid(vm) {
        this.pendenciaService.isValid(this.vm);
    }

}
