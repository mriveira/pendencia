import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fluxotrabalhostatus-details',
    templateUrl: './fluxotrabalhostatus-details.component.html',
    styleUrls: ['./fluxotrabalhostatus-details.component.css']
})
export class FluxoTrabalhoStatusDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
