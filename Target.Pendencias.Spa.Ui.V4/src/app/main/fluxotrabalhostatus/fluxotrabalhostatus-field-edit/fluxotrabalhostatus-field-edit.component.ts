import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-field-edit',
    templateUrl: './fluxotrabalhostatus-field-edit.component.html',
    styleUrls: ['./fluxotrabalhostatus-field-edit.component.css']
})
export class FluxoTrabalhoStatusFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
	public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.model.fluxoTrabalhoStatusId = eventArgs;
	}
	public onChangeMakeSelectnome(eventArgs) {
        this.vm.model.nome = eventArgs;
	}
	public onChangeMakeSelectfluxoTrabalhoTipoId(eventArgs) {
        this.vm.model.fluxoTrabalhoTipoId = eventArgs;
	}
	public onChangeMakeSelectcorFundo(eventArgs) {
        this.vm.model.corFundo = eventArgs;
	}
	public onChangeMakeSelectcorFonte(eventArgs) {
        this.vm.model.corFonte = eventArgs;
	}
	public onChangeMakeSelectordem(eventArgs) {
        this.vm.model.ordem = eventArgs;
	}
   
}
