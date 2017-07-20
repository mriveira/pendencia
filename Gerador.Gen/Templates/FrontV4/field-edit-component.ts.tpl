import { Component, OnInit, Input } from '@angular/core';
import { <#className#>Service } from '../<#classNameLowerAndSeparator#>.service';

@Component({
    selector: 'app-<#classNameLowerAndSeparator#>-field-edit',
    templateUrl: './<#classNameLowerAndSeparator#>-field-edit.component.html',
    styleUrls: ['./<#classNameLowerAndSeparator#>-field-edit.component.css']
})
export class <#className#>FieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private <#classNameInstance#>Service: <#className#>Service) { }

    ngOnInit() {
        this.<#classNameInstance#>Service.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
<#fieldItems#>

	public isValid(vm) {
        this.<#classNameInstance#>Service.isValid(this.vm);
    }
   
}
