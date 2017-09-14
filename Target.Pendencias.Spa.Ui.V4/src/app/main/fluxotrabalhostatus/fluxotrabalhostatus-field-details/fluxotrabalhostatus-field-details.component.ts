
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhostatus-field-details',
    templateUrl: './fluxotrabalhostatus-field-details.component.html',
    styleUrls: ['./fluxotrabalhostatus-field-details.component.css']
})
export class FluxoTrabalhoStatusFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
