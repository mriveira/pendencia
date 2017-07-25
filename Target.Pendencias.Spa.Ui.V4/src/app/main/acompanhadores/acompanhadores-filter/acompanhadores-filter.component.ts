import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-acompanhadores-filter',
    templateUrl: './acompanhadores-filter.component.html',
    styleUrls: ['./acompanhadores-filter.component.css']
})
export class AcompanhadoresFilterComponent implements OnInit {

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
