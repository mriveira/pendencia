import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendeciaprioridade-details',
    templateUrl: './pendeciaprioridade-details.component.html',
    styleUrls: ['./pendeciaprioridade-details.component.css']
})
export class PendeciaPrioridadeDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
