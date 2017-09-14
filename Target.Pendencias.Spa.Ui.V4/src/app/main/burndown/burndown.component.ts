import { Component, OnInit, ViewChild } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';
import { ProjetoService } from '../projeto/projeto.service';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-burndown',
    templateUrl: './burndown.component.html',
    styleUrls: ['./burndown.component.css']
})
export class BurndownComponent implements OnInit {

    vm: ViewModel<any>;
    @ViewChild('chartModal') private chartModal: ModalDirective;
    chart: any;

    constructor(private projetoService: ProjetoService) {
        this.vm = this.projetoService.initVM();
    }

    ngOnInit() {

        this.vm.reletedViewModel = {
            projetos: []
        }

        this.projetoService.getDataListCustom({}).subscribe((response) => {
            this.vm.reletedViewModel.projetos = response.dataList;
        });
    }

    onChart(projeto) {
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


        console.log(this.chart.buningDown.pendencias, this.chart.buningDown.dias, this.chart.buningDown.colors);
    }

    onCancel() {
        this.chartModal.hide();
        this.chart = null;
    }

}
