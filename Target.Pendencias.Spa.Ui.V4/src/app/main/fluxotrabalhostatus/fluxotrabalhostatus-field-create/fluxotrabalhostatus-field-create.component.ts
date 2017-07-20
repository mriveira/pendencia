import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { FluxoTrabalhoStatusService } from '../fluxotrabalhostatus.service';

@Component({
    selector: 'app-fluxotrabalhostatus-field-create',
    templateUrl: './fluxotrabalhostatus-field-create.component.html',
    styleUrls: ['./fluxotrabalhostatus-field-create.component.css']
})
export class FluxoTrabalhoStatusFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private fluxoTrabalhoStatusService: FluxoTrabalhoStatusService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectfluxoTrabalhoTipoId(eventArgs) {
        this.vm.model.fluxoTrabalhoTipoId = eventArgs;
	}


}
