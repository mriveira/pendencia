import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-pendenciadocumento-field-edit',
    templateUrl: './pendenciadocumento-field-edit.component.html',
    styleUrls: ['./pendenciadocumento-field-edit.component.css']
})
export class PendenciaDocumentoFieldEditComponent implements OnInit {

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
    
    public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
        this.isValid();
	}
public onChangeMakeSelectdocumentoId(eventArgs) {
        this.vm.model.documentoId = eventArgs;
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
