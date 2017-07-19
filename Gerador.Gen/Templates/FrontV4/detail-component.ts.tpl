import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-<#classNameLowerAndSeparator#>-details',
    templateUrl: './<#classNameLowerAndSeparator#>-details.component.html',
    styleUrls: ['./<#classNameLowerAndSeparator#>-details.component.css']
})
export class <#className#>DetailsComponent implements OnInit {


    @Input() vm: any;

    constructor() { }

    ngOnInit() {

    }

}
