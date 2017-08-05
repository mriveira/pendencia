import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class <#className#>ServiceFields {


    constructor() {}

	getFormFields() {
		return new FormGroup({
<#riquered#>
        });
	}

	getInfosFields() {
		return {
<#infos#>
        }
    }



}
