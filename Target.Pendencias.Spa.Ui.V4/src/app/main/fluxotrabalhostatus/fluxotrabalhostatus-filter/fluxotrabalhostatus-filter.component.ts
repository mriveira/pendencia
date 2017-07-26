import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fluxotrabalhostatus-filter',
    templateUrl: './fluxotrabalhostatus-filter.component.html',
    styleUrls: ['./fluxotrabalhostatus-filter.component.css']
})
export class FluxoTrabalhoStatusFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    

}
