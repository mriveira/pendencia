import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../pendencia.service';
import { CacheService } from 'app/common/services/cache.service';
import { ECacheType } from 'app/common/type-cache.enum';

@Component({
    selector: 'app-pendencia-create',
    templateUrl: './pendencia-create.component.html',
    styleUrls: ['./pendencia-create.component.css'],
})
export class PendenciaCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = this.pendenciaService.initVM();
        this.pendenciaService.detectChanges(this.ref);
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.pendenciaService.save(model).subscribe((result) => {

            var lastedUrl = CacheService.get("lasted-url", ECacheType.LOCAL);
            if (lastedUrl)
                this.router.navigate([lastedUrl])
            else
              this.router.navigate(["/pendencia"])
        });
    }

}
