import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ProjetoFluxoTrabalhoStatusService } from '../projetofluxotrabalhostatus.service';

@Component({
    selector: 'app-projetofluxotrabalhostatus-field-create',
    templateUrl: './projetofluxotrabalhostatus-field-create.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-field-create.component.css']
})
export class ProjetoFluxoTrabalhoStatusFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private projetoFluxoTrabalhoStatusService: ProjetoFluxoTrabalhoStatusService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }



}
