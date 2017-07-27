import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-field-edit',
    templateUrl: './acompanhadores-field-edit.component.html',
    styleUrls: ['./acompanhadores-field-edit.component.css']
})
export class AcompanhadoresFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private acompanhadoresService: AcompanhadoresService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
	}
   
}
