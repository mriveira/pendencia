
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetofluxotrabalhostatus-field-details',
    templateUrl: './projetofluxotrabalhostatus-field-details.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-field-details.component.css']
})
export class ProjetoFluxoTrabalhoStatusFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
