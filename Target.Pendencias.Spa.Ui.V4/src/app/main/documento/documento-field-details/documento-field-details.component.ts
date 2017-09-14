
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-documento-field-details',
    templateUrl: './documento-field-details.component.html',
    styleUrls: ['./documento-field-details.component.css']
})
export class DocumentoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
