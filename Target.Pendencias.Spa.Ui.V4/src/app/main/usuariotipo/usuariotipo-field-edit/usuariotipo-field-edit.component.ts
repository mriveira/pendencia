import { Component, OnInit, Input } from '@angular/core';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-field-edit',
    templateUrl: './usuariotipo-field-edit.component.html',
    styleUrls: ['./usuariotipo-field-edit.component.css']
})
export class UsuarioTipoFieldEditComponent implements OnInit {

    @Input() vm: any;


    constructor(private usuarioTipoService: UsuarioTipoService) { }

    ngOnInit() {
        this.usuarioTipoService.isValid(this.vm);
    }

    public onSave(model)
    {

    }

    public onCancel() {

    }
    


	public isValid(vm) {
        this.usuarioTipoService.isValid(this.vm);
    }
   
}
