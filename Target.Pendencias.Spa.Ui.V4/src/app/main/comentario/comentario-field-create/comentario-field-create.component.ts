import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ComentarioService } from '../comentario.service';

@Component({
    selector: 'app-comentario-field-create',
    templateUrl: './comentario-field-create.component.html',
    styleUrls: ['./comentario-field-create.component.css']
})
export class ComentarioFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private comentarioService: ComentarioService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
	}
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}


}
