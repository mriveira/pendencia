import { Component, OnInit, Input } from '@angular/core';
import { ProjetoService } from '../projeto.service';

@Component({
    selector: 'app-projeto-field-edit',
    templateUrl: './projeto-field-edit.component.html',
    styleUrls: ['./projeto-field-edit.component.css']
})
export class ProjetoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private projetoService: ProjetoService) { }

    ngOnInit() {
        this.projetoService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectclienteId(eventArgs) {
        this.vm.model.clienteId = eventArgs;
        this.projetoService.isValid(this.vm);
	}
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
        this.projetoService.isValid(this.vm);
	}


	public isValid(vm) {
        this.projetoService.isValid(this.vm);
    }
   
}
