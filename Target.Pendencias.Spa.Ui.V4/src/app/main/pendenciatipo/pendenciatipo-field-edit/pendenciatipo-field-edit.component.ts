import { Component, OnInit, Input } from '@angular/core';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-field-edit',
    templateUrl: './pendenciatipo-field-edit.component.html',
    styleUrls: ['./pendenciatipo-field-edit.component.css']
})
export class PendenciaTipoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendenciaTipoService: PendenciaTipoService) { }

    ngOnInit() {
        this.pendenciaTipoService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    


	public isValid(vm) {
        this.pendenciaTipoService.isValid(this.vm);
    }
   
}
