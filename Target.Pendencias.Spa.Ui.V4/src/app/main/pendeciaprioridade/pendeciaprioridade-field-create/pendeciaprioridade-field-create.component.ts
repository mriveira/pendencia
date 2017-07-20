import { Component, OnInit, Input } from '@angular/core';
import { PendeciaPrioridadeService } from '../pendeciaprioridade.service';

@Component({
    selector: 'app-pendeciaprioridade-field-create',
    templateUrl: './pendeciaprioridade-field-create.component.html',
    styleUrls: ['./pendeciaprioridade-field-create.component.css']
})
export class PendeciaPrioridadeFieldCreateComponent implements OnInit {

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
