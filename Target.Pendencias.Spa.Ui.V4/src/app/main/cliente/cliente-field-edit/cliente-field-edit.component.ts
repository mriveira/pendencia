import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-cliente-field-edit',
    templateUrl: './cliente-field-edit.component.html',
    styleUrls: ['./cliente-field-edit.component.css']
})
export class ClienteFieldEditComponent implements OnInit {

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
    
    public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
        this.isValid();
	}


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
