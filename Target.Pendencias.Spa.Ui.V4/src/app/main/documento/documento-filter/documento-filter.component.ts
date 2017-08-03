import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-documento-filter',
    templateUrl: './documento-filter.component.html',
    styleUrls: ['./documento-filter.component.css']
})
export class DocumentoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectarquivo(eventArgs) {
        this.vm.modelFilter.arquivo = eventArgs;
	}
public onChangeMakeSelectext(eventArgs) {
        this.vm.modelFilter.ext = eventArgs;
	}

}
