import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-<#classNameLowerAndSeparator#>-field-edit',
    templateUrl: './<#classNameLowerAndSeparator#>-field-edit.component.html',
    styleUrls: ['./<#classNameLowerAndSeparator#>-field-edit.component.css']
})
export class <#className#>FieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor() { }

    ngOnInit() {
        this.isValid();
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    
    <#fields#>

    public isValid() {

        for (let key in this.vm.required) {
            if (this.vm.required.hasOwnProperty(key)) {

                console.log("isValid", this.vm.model);

                if (this.vm.model[key] == null || this.vm.model[key] == undefined || this.vm.model[key] == "undefined" || this.vm.model[key] == "") {
                    this.vm.isValid = false;
                    return false;
                }
            }
        }
        this.vm.isValid = true;
        return true;

    }

}
