import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-acompanhadores-details',
    templateUrl: './acompanhadores-details.component.html',
    styleUrls: ['./acompanhadores-details.component.css']
})
export class AcompanhadoresDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
