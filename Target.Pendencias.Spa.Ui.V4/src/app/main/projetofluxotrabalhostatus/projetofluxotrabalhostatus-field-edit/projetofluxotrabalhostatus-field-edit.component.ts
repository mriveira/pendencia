import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-field-edit',
    templateUrl: './projetofluxotrabalhostatus-field-edit.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-field-edit.component.css']
})
export class ProjetoFluxoTrabalhoStatusFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private ref: ChangeDetectorRef) { }

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
	public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.model.fluxoTrabalhoStatusId = eventArgs;
	}
   
}
