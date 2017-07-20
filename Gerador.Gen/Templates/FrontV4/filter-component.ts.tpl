import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-<#classNameLowerAndSeparator#>-filter',
    templateUrl: './<#classNameLowerAndSeparator#>-filter.component.html',
    styleUrls: ['./<#classNameLowerAndSeparator#>-filter.component.css']
})
export class <#className#>FilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    <#fieldItems#>

}
