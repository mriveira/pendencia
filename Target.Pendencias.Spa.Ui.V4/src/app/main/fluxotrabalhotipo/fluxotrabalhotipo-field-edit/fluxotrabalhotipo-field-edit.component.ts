import { Component, OnInit, Input } from '@angular/core';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-field-edit',
    templateUrl: './fluxotrabalhotipo-field-edit.component.html',
    styleUrls: ['./fluxotrabalhotipo-field-edit.component.css']
})
export class FluxoTrabalhoTipoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService) { }

    ngOnInit() {
        this.fluxoTrabalhoTipoService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    


	public isValid(vm) {
        this.fluxoTrabalhoTipoService.isValid(this.vm);
    }
   
}
