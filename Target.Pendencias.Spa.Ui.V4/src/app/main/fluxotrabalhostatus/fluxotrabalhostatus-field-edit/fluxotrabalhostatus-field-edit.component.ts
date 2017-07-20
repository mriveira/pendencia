import { Component, OnInit, Input } from '@angular/core';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-field-edit',
    templateUrl: './fluxotrabalhostatus-field-edit.component.html',
    styleUrls: ['./fluxotrabalhostatus-field-edit.component.css']
})
export class FluxoTrabalhoStatusFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService) { }

    ngOnInit() {
        this.fluxoTrabalhoStatusService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectfluxoTrabalhoTipoId(eventArgs) {
        this.vm.model.fluxoTrabalhoTipoId = eventArgs;
        this.fluxoTrabalhoStatusService.isValid(this.vm);
	}


	public isValid(vm) {
        this.fluxoTrabalhoStatusService.isValid(this.vm);
    }
   
}
