
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-acompanhadores-field-details',
    templateUrl: './acompanhadores-field-details.component.html',
    styleUrls: ['./acompanhadores-field-details.component.css']
})
export class AcompanhadoresFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
