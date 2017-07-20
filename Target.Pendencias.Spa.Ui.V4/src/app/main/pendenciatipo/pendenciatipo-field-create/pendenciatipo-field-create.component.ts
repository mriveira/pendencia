import { Component, OnInit, Input } from '@angular/core';
import { PendenciaTipoService } from '../pendenciatipo.service';

@Component({
    selector: 'app-pendenciatipo-field-create',
    templateUrl: './pendenciatipo-field-create.component.html',
    styleUrls: ['./pendenciatipo-field-create.component.css']
})
export class PendenciaTipoFieldCreateComponent implements OnInit {

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
