import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciatempos-filter',
    templateUrl: './pendenciatempos-filter.component.html',
    styleUrls: ['./pendenciatempos-filter.component.css']
})
export class PendenciaTemposFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.modelFilter.pendenciaId = eventArgs;
	}
public onChangeMakeSelectusuarioId(eventArgs) {
        this.vm.modelFilter.usuarioId = eventArgs;
	}

}
