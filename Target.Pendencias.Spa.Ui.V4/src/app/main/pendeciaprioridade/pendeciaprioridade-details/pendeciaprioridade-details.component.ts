import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendeciaprioridade-details',
    templateUrl: './pendeciaprioridade-details.component.html',
    styleUrls: ['./pendeciaprioridade-details.component.css']
})
export class PendeciaPrioridadeDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
