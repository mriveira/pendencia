import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';

@Component({
    selector: 'loading',
    template: `
    <div class="loader" [hidden]="!requesting">
        <img src="../../../assets/images/loader.gif" alt="carregando..." />
    </div>`,
})
export class LoadingComponent implements OnInit {


    requesting: boolean;

    ngOnInit() {
        GlobalService.operationRequesting.subscribe(_requesting => {

            this.requesting = _requesting;
        })
    }
    

    constructor() { }

}
