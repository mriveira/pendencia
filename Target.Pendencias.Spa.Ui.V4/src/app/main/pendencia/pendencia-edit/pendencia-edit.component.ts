import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { PendenciaService } from '../pendencia.service';
import { GlobalService, NotificationParameters } from '../../../global.service';
import { CacheService } from 'app/common/services/cache.service';
import { ECacheType } from 'app/common/type-cache.enum';

@Component({
    selector: 'app-pendencia-edit',
    templateUrl: './pendencia-edit.component.html',
    styleUrls: ['./pendencia-edit.component.css'],
})
export class PendenciaEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private pendenciaService: PendenciaService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = null;

    }

    ngOnInit() {

        this.vm = this.pendenciaService.initVM();
        this.pendenciaService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });


        this.pendenciaService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
            GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })

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
