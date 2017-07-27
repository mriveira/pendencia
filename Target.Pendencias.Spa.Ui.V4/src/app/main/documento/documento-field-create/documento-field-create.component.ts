import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { DocumentoService } from '../documento.service';

@Component({
    selector: 'app-documento-field-create',
    templateUrl: './documento-field-create.component.html',
    styleUrls: ['./documento-field-create.component.css']
})
export class DocumentoFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private documentoService: DocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectdocumentoId(eventArgs) {
        this.vm.model.documentoId = eventArgs;
	}
	public onChangeMakeSelectarquivo(eventArgs) {
        this.vm.model.arquivo = eventArgs;
	}
	public onChangeMakeSelectext(eventArgs) {
        this.vm.model.ext = eventArgs;
	}

}
