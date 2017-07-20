import { Component, OnInit, Input } from '@angular/core';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-field-create',
    templateUrl: './fluxotrabalhotipo-field-create.component.html',
    styleUrls: ['./fluxotrabalhotipo-field-create.component.css']
})
export class FluxoTrabalhoTipoFieldCreateComponent implements OnInit {

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
