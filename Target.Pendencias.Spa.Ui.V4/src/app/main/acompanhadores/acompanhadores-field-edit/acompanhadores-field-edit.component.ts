import { Component, OnInit, Input } from '@angular/core';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-field-edit',
    templateUrl: './acompanhadores-field-edit.component.html',
    styleUrls: ['./acompanhadores-field-edit.component.css']
})
export class AcompanhadoresFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private acompanhadoresService: AcompanhadoresService) { }

    ngOnInit() {
        this.acompanhadoresService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
        this.acompanhadoresService.isValid(this.vm);
	}


	public isValid(vm) {
        this.acompanhadoresService.isValid(this.vm);
    }
   
}
