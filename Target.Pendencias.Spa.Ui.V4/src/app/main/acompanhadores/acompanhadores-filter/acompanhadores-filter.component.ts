import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-acompanhadores-filter',
    templateUrl: './acompanhadores-filter.component.html',
    styleUrls: ['./acompanhadores-filter.component.css']
})
export class AcompanhadoresFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    

}
