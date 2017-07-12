import { Injectable, EventEmitter } from '@angular/core'



export class GlobalService {


    static operationExecuted = new EventEmitter<OperationExecutedParameters>();

    static operationExecutedCallback = new EventEmitter<any>();


    public static GetEndPoints() {
        return new EndPoints();
    }

    public static GetRequestControl() {
        return new RequestControl();
    }

    public static GetOperationExecutedParameters(_selector: string, _operation: any, _message: string, _service?: any, _vm?: any, _operationCallback?: any) {
        return new OperationExecutedParameters(_selector, _operation, _message, _service, _vm, _operationCallback);
    }

};

export class OperationExecutedParameters {


    public selector: string;
    public operation: any;
    public message: string;
    public service?: any;
    public vm?: any;
    public operationCallback: any;

    constructor(_selector: string, _operation: any, _message: string, _service?: any, _vm?: any, _operationCallback? : any) {

        this.selector = _selector;
        this.operation = _operation;
        this.message = _message;
        this.service = _service;
        this.vm = _vm;
        this.operationCallback = _operationCallback;
    }

}


export class RequestControl {

    private _REQUESTING;

    constructor() {
        this._REQUESTING = false
    }

    Set(value: boolean) {
        this._REQUESTING = value;
    }

    Get() {
        return this._REQUESTING;
    }

}

export class EndPoints {

    public readonly DEFAULT: string;
    public readonly AUTHAPI: string;
    public readonly AUTH: string;
    public readonly APP: string;

    constructor() {
        this.DEFAULT = 'http://localhost:8122/api/';
        this.AUTHAPI = 'http://localhost:4000/api';
        this.AUTH = 'http://localhost:4000/';
        this.APP = 'http://localhost:4200';
    }
};
