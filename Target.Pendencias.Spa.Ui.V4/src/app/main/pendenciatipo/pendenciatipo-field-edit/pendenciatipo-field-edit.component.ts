import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-field-edit',
    templateUrl: './pendenciatipo-field-edit.component.html',
    styleUrls: ['./pendenciatipo-field-edit.component.css']
})
export class PendenciaTipoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendenciaTipoService: PendenciaTipoService, private ref: ChangeDetectorRef) { }

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
