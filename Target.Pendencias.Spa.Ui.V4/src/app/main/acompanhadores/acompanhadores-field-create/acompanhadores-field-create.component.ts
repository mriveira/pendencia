import { Component, OnInit, Input } from '@angular/core';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-field-create',
    templateUrl: './acompanhadores-field-create.component.html',
    styleUrls: ['./acompanhadores-field-create.component.css']
})
export class AcompanhadoresFieldCreateComponent implements OnInit {

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
