import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhostatus-details',
    templateUrl: './fluxotrabalhostatus-details.component.html',
    styleUrls: ['./fluxotrabalhostatus-details.component.css']
})
export class FluxoTrabalhoStatusDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
