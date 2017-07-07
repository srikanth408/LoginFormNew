import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LeavedataService {
    private _url: string = 'app/Apidata/app.leavedata.json'; // <replace json file URL with rest api URL for auth>


    constructor(
        private _router: Router, private _http: Http) { }


    getEmployees() {
        //Change the following method to post for server authentication.
        //return this._http.post(this._url, opt) example call
        return this._http.get(this._url)
            .map((response: Response) => response.json());

    }


}