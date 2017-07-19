import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fluxotrabalhotipo-details',
    templateUrl: './fluxotrabalhotipo-details.component.html',
    styleUrls: ['./fluxotrabalhotipo-details.component.css']
})
export class FluxoTrabalhoTipoDetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
