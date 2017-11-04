import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoService } from '../projeto/projeto.service';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-burndown',
    templateUrl: './burndown.component.html',
    styleUrls: ['./burndown.component.css']
})
export class BurndownComponent implements OnInit, OnDestroy {

    vm: ViewModel<any>;
    @ViewChild('chartModal') private chartModal: ModalDirective;
    @ViewChild('filterModal') private filterModal: ModalDirective;

    chart: any;

    constructor(private projetoService: ProjetoService) {
        this.vm = this.projetoService.initVM();
    }

    ngOnInit() {

        this.vm.reletedViewModel = {
            projetos: []
        }
        this.obterDados(this.vm.modelFilter);
    }

    obterDados(filter) {
        this.projetoService.getDataListCustom(filter).subscribe((response) => {
            this.vm.reletedViewModel.projetos = response.dataList;
        });
    }

    public onFilter(modelFilter) {
        this.obterDados(modelFilter);
        this.filterModal.hide();
    }

    public onChart(projeto) {
        this.chartModal.show();
        this.chart = {
            buningDown: {
                pendencias: projeto.buningDown.pendencias,
                dias: projeto.buningDown.dias,
                colors: [{
                    backgroundColor: 'rgba(148,159,177,0.2)',
                    borderColor: projeto.buningDown.colors[0],
                    pointBackgroundColor: 'rgba(148,159,177,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                },
                {
                    backgroundColor: 'rgba(148,159,177,0.2)',
                    borderColor: projeto.buningDown.colors[1],
                    pointBackgroundColor: 'rgba(148,159,177,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                }],

                dataset: [{ data: projeto.buningDown.pendencias[0], label: "Previsão de Pendencias" }, { data: projeto.buningDown.pendencias[1], label: "Pendencias Restantes" }],
            }
        };

    }

    public onShowFilter() {
        this.filterModal.show();
    }

    public onClearFilter() {
        this.vm.modelFilter = {};
    }

    public onCancel() {
        this.chartModal.hide();
        this.filterModal.hide();
        this.chart = null;
    }

    ngOnDestroy() {

    }

}
