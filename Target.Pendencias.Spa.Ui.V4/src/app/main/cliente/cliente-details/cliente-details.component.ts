import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cliente-details',
    templateUrl: './cliente-details.component.html',
    styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
