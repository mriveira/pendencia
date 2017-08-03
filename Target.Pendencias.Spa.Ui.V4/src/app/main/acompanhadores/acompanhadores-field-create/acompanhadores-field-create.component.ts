import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { AcompanhadoresService } from '../acompanhadores.service';

@Component({
    selector: 'app-acompanhadores-field-create',
    templateUrl: './acompanhadores-field-create.component.html',
    styleUrls: ['./acompanhadores-field-create.component.css']
})
export class AcompanhadoresFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private acompanhadoresService: AcompanhadoresService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
