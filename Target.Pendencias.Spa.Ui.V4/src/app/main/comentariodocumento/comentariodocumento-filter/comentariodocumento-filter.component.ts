import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-comentariodocumento-filter',
    templateUrl: './comentariodocumento-filter.component.html',
    styleUrls: ['./comentariodocumento-filter.component.css']
})
export class ComentarioDocumentoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectdocumentoId(eventArgs) {
        this.vm.modelFilter.documentoId = eventArgs;
	}
public onChangeMakeSelectcomentarioId(eventArgs) {
        this.vm.modelFilter.comentarioId = eventArgs;
	}


}
