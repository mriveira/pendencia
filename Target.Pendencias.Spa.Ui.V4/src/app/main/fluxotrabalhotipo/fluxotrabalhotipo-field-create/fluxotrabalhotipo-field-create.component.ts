import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { FluxoTrabalhoTipoService } from '../fluxotrabalhotipo.service';

@Component({
    selector: 'app-fluxotrabalhotipo-field-create',
    templateUrl: './fluxotrabalhotipo-field-create.component.html',
    styleUrls: ['./fluxotrabalhotipo-field-create.component.css']
})
export class FluxoTrabalhoTipoFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private fluxoTrabalhoTipoService: FluxoTrabalhoTipoService, private ref: ChangeDetectorRef) { }

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
