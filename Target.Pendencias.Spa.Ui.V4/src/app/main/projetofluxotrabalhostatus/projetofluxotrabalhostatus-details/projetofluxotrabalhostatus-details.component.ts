import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetofluxotrabalhostatus-details',
    templateUrl: './projetofluxotrabalhostatus-details.component.html',
    styleUrls: ['./projetofluxotrabalhostatus-details.component.css']
})
export class ProjetoFluxoTrabalhoStatusDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
