import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

//validation function
function validateDropdownFactory(): ValidatorFn {
    return (c: AbstractControl) => {
        let isValid = c.value !== null;

        if (isValid) {
            return null;
        }
        else {
            return {
                dropdownRequired: {
                    valid: false
                }
            };
        }
    }
}

@Directive({
    selector: '[ms-required][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: DropdownRequiredComponent, multi: true }
    ]
})

export class DropdownRequiredComponent implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = validateDropdownFactory();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}