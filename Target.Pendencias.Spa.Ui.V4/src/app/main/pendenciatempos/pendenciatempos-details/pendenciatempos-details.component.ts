import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-pendenciatempos-details',
    templateUrl: './pendenciatempos-details.component.html',
    styleUrls: ['./pendenciatempos-details.component.css']
})
export class PendenciaTemposDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
