import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-projeto-field-edit',
    templateUrl: './projeto-field-edit.component.html',
    styleUrls: ['./projeto-field-edit.component.css']
})
export class ProjetoFieldEditComponent implements OnInit {

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
    
    public onChangeMakeSelectclienteId(eventArgs) {
        this.vm.model.clienteId = eventArgs;
        this.isValid();
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
