import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-field-edit',
    templateUrl: './fluxotrabalhotipo-field-edit.component.html',
    styleUrls: ['./fluxotrabalhotipo-field-edit.component.css']
})
export class FluxoTrabalhoTipoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }
    

   
}
