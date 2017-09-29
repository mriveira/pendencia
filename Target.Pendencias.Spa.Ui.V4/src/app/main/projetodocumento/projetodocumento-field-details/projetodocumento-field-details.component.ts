
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-projetodocumento-field-details',
    templateUrl: './projetodocumento-field-details.component.html',
    styleUrls: ['./projetodocumento-field-details.component.css']
})
export class ProjetoDocumentoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
