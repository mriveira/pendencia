import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-projeto-details',
    templateUrl: './projeto-details.component.html',
    styleUrls: ['./projeto-details.component.css']
})
export class ProjetoDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
