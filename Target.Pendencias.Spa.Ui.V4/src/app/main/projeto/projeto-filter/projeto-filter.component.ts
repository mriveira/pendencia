import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-projeto-filter',
    templateUrl: './projeto-filter.component.html',
    styleUrls: ['./projeto-filter.component.css']
})
export class ProjetoFilterComponent implements OnInit {

    @Input() vm: any;

    constructor() { }

    ngOnInit() {
    }


    public onChangeMakeSelectclienteId(eventArgs) {
        this.vm.modelFilter.clienteId = eventArgs;
	}

}
