import { Component, OnInit, Input } from '@angular/core';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-field-create',
    templateUrl: './projetofluxotrabalhostatus-field-create.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-field-create.component.css']
})
export class ProjetoFluxoTrabalhoStatusFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService) { }

    ngOnInit() {
        this.projetoFluxoTrabalhoStatusService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectprojetoId(eventArgs) {
        this.vm.model.projetoId = eventArgs;
        this.projetoFluxoTrabalhoStatusService.isValid(this.vm);
	}
	public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.model.fluxoTrabalhoStatusId = eventArgs;
        this.projetoFluxoTrabalhoStatusService.isValid(this.vm);
	}


	public isValid(vm) {
        this.projetoFluxoTrabalhoStatusService.isValid(this.vm);
    }

}
