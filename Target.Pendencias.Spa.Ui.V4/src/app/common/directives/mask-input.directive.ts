﻿import { Directive, ElementRef, Renderer, Input, OnInit, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '[maski]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MaskInputDirective,
        multi: true
    }]
})
export class MaskInputDirective implements ControlValueAccessor {

    onTouched: any;
    onChange: any;

    @Input('maski') mask: string;

    constructor(private _elemetRef: ElementRef, private _renderer: Renderer) {

    }

    writeValue(value: any): void {
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        var valor = $event.target.value.replace(/\D/g, '');
        var pad = this.mask.replace(/\D/g, '').replace(/9/g, '_');
        var valorMask = valor + pad.substring(0, pad.length - valor.length);

        // retorna caso pressionado backspace
        if ($event.keyCode === 8) {
            this.onChange(valor);
            return;
        }

        if (valor.length <= pad.length) {
            this.onChange(valor);
        }

        var valorMaskPos = 0;
        valor = '';
        for (var i = 0; i < this.mask.length; i++) {
            if (isNaN(parseInt(this.mask.charAt(i)))) {
                valor += this.mask.charAt(i);
            } else {
                valor += valorMask[valorMaskPos++];
            }
        }

        if (valor.indexOf('_') > -1) {
            valor = valor.substr(0, valor.indexOf('_'));
        }

        $event.target.value = valor;
    }
    

    @HostListener('blur', ['$event'])
    onBlur($event: any) {

        if ($event.target.value.length === this.mask.length) {
            return;
        }

    }
    @HostListener('focus', ['$event'])
    onFocus($event: any) {

    }
}