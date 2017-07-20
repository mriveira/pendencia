import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-field-create',
    templateUrl: './pendenciatipo-field-create.component.html',
    styleUrls: ['./pendenciatipo-field-create.component.css']
})
export class PendenciaTipoFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private pendenciaTipoService: PendenciaTipoService, private ref: ChangeDetectorRef) { }

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
