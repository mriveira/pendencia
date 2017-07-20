import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciatipo-details',
    templateUrl: './pendenciatipo-details.component.html',
    styleUrls: ['./pendenciatipo-details.component.css']
})
export class PendenciaTipoDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
