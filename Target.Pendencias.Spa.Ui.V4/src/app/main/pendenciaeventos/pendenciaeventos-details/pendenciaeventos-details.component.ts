import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciaeventos-details',
    templateUrl: './pendenciaeventos-details.component.html',
    styleUrls: ['./pendenciaeventos-details.component.css']
})
export class PendenciaEventosDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
