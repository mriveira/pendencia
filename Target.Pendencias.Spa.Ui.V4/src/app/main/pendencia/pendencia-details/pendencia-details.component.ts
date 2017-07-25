import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendencia-details',
    templateUrl: './pendencia-details.component.html',
    styleUrls: ['./pendencia-details.component.css']
})
export class PendenciaDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
