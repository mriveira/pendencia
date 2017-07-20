import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-pendencia-field-create',
    templateUrl: './pendencia-field-create.component.html',
    styleUrls: ['./pendencia-field-create.component.css']
})
export class PendenciaFieldCreateComponent implements OnInit {

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

    public onChangeMakeSelectprojetoId(eventArgs) {
        this.vm.model.projetoId = eventArgs;
        this.isValid();
	}
public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
        this.isValid();
	}
public onChangeMakeSelectpendenciaTipoId(eventArgs) {
        this.vm.model.pendenciaTipoId = eventArgs;
        this.isValid();
	}
public onChangeMakeSelectfluxoTrabalhoStatusId(eventArgs) {
        this.vm.model.fluxoTrabalhoStatusId = eventArgs;
        this.isValid();
	}
public onChangeMakeSelectpendenciaPrioridadeId(eventArgs) {
        this.vm.model.pendenciaPrioridadeId = eventArgs;
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
