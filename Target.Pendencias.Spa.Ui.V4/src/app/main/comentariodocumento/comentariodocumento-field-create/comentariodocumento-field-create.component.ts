import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-comentariodocumento-field-create',
    templateUrl: './comentariodocumento-field-create.component.html',
    styleUrls: ['./comentariodocumento-field-create.component.css']
})
export class ComentarioDocumentoFieldCreateComponent implements OnInit {

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

    public onChangeMakeSelectdocumentoId(eventArgs) {
        this.vm.model.documentoId = eventArgs;
        this.isValid();
	}
public onChangeMakeSelectcomentarioId(eventArgs) {
        this.vm.model.comentarioId = eventArgs;
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
