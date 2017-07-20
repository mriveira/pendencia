import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cliente-filter',
    templateUrl: './cliente-filter.component.html',
    styleUrls: ['./cliente-filter.component.css']
})
export class ClienteFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    

}
