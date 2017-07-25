import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-documento-details',
    templateUrl: './documento-details.component.html',
    styleUrls: ['./documento-details.component.css']
})
export class DocumentoDetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
