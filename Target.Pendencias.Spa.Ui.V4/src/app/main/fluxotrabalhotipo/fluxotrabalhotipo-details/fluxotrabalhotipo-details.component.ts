import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-fluxotrabalhotipo-details',
    templateUrl: './fluxotrabalhotipo-details.component.html',
    styleUrls: ['./fluxotrabalhotipo-details.component.css']
})
export class FluxoTrabalhoTipoDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
