
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhotipo-field-details',
    templateUrl: './fluxotrabalhotipo-field-details.component.html',
    styleUrls: ['./fluxotrabalhotipo-field-details.component.css']
})
export class FluxoTrabalhoTipoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
