import { ECacheType } from 'app/common/cache/type-cache.enum';
import { CacheService } from './../common/cache/cache.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {

    menuOpen: boolean;
    userInfo: any;

    constructor() {
        this.menuOpen = true;
    }

    ngOnInit() {
        this.menuOpen = true;
        
    }

    onChangeMenu(message: string): void {
        this.menuOpen = !this.menuOpen;
    }

    OnCompleteMenu(userInfo) {
        this.userInfo = userInfo.userInfo;
        console.log(userInfo);
    }

    
}
