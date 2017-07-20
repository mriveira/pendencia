import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-projetofluxotrabalhostatus-details',
    templateUrl: './projetofluxotrabalhostatus-details.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-details.component.css']
})
export class ProjetoFluxoTrabalhoStatusDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
