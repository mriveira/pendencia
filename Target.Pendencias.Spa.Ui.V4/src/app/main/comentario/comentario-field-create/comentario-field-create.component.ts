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

	public onChangeMakeSelectcomentarioId(eventArgs) {
        this.vm.model.comentarioId = eventArgs;
	}
	public onChangeMakeSelectdescricao(eventArgs) {
        this.vm.model.descricao = eventArgs;
	}
	public onChangeMakeSelectdata(eventArgs) {
        this.vm.model.data = eventArgs;
	}
	public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.model.usuarioId = eventArgs;
	}
	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}

}
