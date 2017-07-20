import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { PendenciaDocumentoService } from '../pendenciadocumento.service';

@Component({
    selector: 'app-pendenciadocumento-field-create',
    templateUrl: './pendenciadocumento-field-create.component.html',
    styleUrls: ['./pendenciadocumento-field-create.component.css']
})
export class PendenciaDocumentoFieldCreateComponent implements OnInit {

    @Input() vm: any;


   constructor(private pendenciaDocumentoService: PendenciaDocumentoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

    public onSave(model)
    {

    }

    public onCancel() {

    }

	public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.model.pendenciaId = eventArgs;
	}
	public onChangeMakeSelectdocumentoId(eventArgs) {
        this.vm.model.documentoId = eventArgs;
	}


}
