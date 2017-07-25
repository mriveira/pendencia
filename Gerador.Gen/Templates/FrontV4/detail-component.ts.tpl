import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-<#classNameLowerAndSeparator#>-details',
    templateUrl: './<#classNameLowerAndSeparator#>-details.component.html',
    styleUrls: ['./<#classNameLowerAndSeparator#>-details.component.css']
})
export class <#className#>DetailsComponent implements OnInit {


    @Input() vm: ViewModel;

    constructor() { }

    ngOnInit() {

    }

}
