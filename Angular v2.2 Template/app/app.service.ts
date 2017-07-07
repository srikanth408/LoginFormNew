import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeedataService {
    private _url: string = 'app/Apidata/app.employeedata.json'; // <replace json file URL with rest api URL for auth>


    constructor(
        private _router: Router, private _http: Http) { }


    getEmployees() {
        //Change the following method to post for server authentication.
        //return this._http.post(this._url, opt) example call
        return this._http.get(this._url)
            .map((response: Response) => response.json());

    }
   saveRetur(data:any){
    console.log('Finished');
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(data);
    return this._http.post('api/save', data, headers)
    .map((res:Response) => res.json());
  }
   LeaveRetur(data:any){
    console.log('Finished');
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(data);
    return this._http.post('api/save', data, headers)
    .map((res:Response) => res.json());
  }
   savedata(data:any){
    console.log('Finished');
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(data);
    return this._http.post('api/save', data, headers)
    .map((res:Response) => res.json());
  }
  deletedata(data:any){
    console.log('Finished');
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(data);
    return this._http.post('api/save', data, headers)
    .map((res:Response) => res.json());
  }
 

}
