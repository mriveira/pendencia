import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pendenciaeventos-filter',
    templateUrl: './pendenciaeventos-filter.component.html',
    styleUrls: ['./pendenciaeventos-filter.component.css']
})
export class PendenciaEventosFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectpendenciaEventosId(eventArgs) {
        this.vm.modelFilter.pendenciaEventosId = eventArgs;
	}
public onChangeMakeSelectpendenciaId(eventArgs) {
        this.vm.modelFilter.pendenciaId = eventArgs;
	}
public onChangeMakeSelectdescricao(eventArgs) {
        this.vm.modelFilter.descricao = eventArgs;
	}
public onChangeMakeSelectdata(eventArgs) {
        this.vm.modelFilter.data = eventArgs;
	}

}
