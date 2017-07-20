import { Component, OnInit, Input } from '@angular/core';
import { UsuarioTipoService } from '../usuariotipo.service';

@Component({
    selector: 'app-usuariotipo-field-create',
    templateUrl: './usuariotipo-field-create.component.html',
    styleUrls: ['./usuariotipo-field-create.component.css']
})
export class UsuarioTipoFieldCreateComponent implements OnInit {

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
