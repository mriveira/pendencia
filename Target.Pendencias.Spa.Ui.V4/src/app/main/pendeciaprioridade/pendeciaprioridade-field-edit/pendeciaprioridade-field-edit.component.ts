import { Component, OnInit, Input } from '@angular/core';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-field-edit',
    templateUrl: './pendeciaprioridade-field-edit.component.html',
    styleUrls: ['./pendeciaprioridade-field-edit.component.css']
})
export class PendeciaPrioridadeFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private pendeciaPrioridadeService: PendeciaPrioridadeService) { }

    ngOnInit() {
        this.pendeciaPrioridadeService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    


	public isValid(vm) {
        this.pendeciaPrioridadeService.isValid(this.vm);
    }
   
}
