import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { <#className#>Service } from '../<#classNameLowerAndSeparator#>.service';

@Component({
    selector: 'app-<#classNameLowerAndSeparator#>-create',
    templateUrl: './<#classNameLowerAndSeparator#>-create.component.html',
    styleUrls: ['./<#classNameLowerAndSeparator#>-create.component.css'],
})
export class <#className#>CreateComponent implements OnInit {

    vm: ViewModel;
    id: number;
    private sub: any;

    constructor(private <#classNameInstance#>Service: <#className#>Service, private route: ActivatedRoute, private router: Router) {

        this.vm = this.<#classNameInstance#>Service.initVM();
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.<#classNameInstance#>Service.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
        })

    }

    onSave(model) {

        this.<#classNameInstance#>Service.save(model).subscribe((result) => {
            this.router.navigate(["/<#classNameLower#>"])
        });
    }

}
