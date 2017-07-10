import { Injectable } from '@angular/core'
import { Observable, Observer } from 'rxjs/Rx';


export class GlobalVariableService {

    private static _currentUser: Observable<any>;

    public static GetEndPoints() {
        return new EndPoints();
    }

    public static GetRequestControl() {
        return new RequestControl();
    }

    public static setCurrentUser(currentUser) {
        this._currentUser = currentUser;
    }

    public static getCurrentUser() {
        return this._currentUser;
    }




};


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
