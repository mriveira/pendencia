import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { PendenciaEventosService } from '../pendenciaeventos.service';

@Component({
    selector: 'app-pendenciaeventos-field-edit',
    templateUrl: './pendenciaeventos-field-edit.component.html',
    styleUrls: ['./pendenciaeventos-field-edit.component.css']
})
export class PendenciaEventosFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendenciaEventosService: PendenciaEventosService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectpendenciaEventosId(eventArgs) {
        this.vm.model.pendenciaEventosId = eventArgs;
	}
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}
	public onChangeMakeSelectdescricao(eventArgs) {
        this.vm.model.descricao = eventArgs;
	}
	public onChangeMakeSelectdata(eventArgs) {
        this.vm.model.data = eventArgs;
	}
   
}
