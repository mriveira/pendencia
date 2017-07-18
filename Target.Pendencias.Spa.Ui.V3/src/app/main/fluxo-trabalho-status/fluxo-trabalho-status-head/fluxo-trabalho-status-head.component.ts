import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fluxo-trabalho-status-head',
  templateUrl: './fluxo-trabalho-status-head.component.html',
  styleUrls: ['./fluxo-trabalho-status-head.component.css']
})
export class FluxoTrabalhoStatusHeadComponent implements OnInit {


   @Input() vm: any;


  constructor() { }

  ngOnInit() {
  }

}
