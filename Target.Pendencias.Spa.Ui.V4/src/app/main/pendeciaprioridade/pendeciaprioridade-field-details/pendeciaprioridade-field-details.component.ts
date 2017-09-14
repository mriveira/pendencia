
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendeciaprioridade-field-details',
    templateUrl: './pendeciaprioridade-field-details.component.html',
    styleUrls: ['./pendeciaprioridade-field-details.component.css']
})
export class PendeciaPrioridadeFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
