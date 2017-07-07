import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import{AuthenticationService} from './app.authenticationservice';
import { EmpDataService } from './app.model';
import { EmployeedataService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [EmployeedataService]
})
export class AppComponent {
  loggedIn: any;

  constructor(private router: Router, private empDataSr: EmpDataService, private _service: EmployeedataService) {

  }

  ngOnInit() {
    this.onRefresh();
  }
  get isLoggedIn() {
    return this.empDataSr.isLoggedIn();
  }



  logout() {
    this.empDataSr.logout();
    this.router.navigate(['']);
    localStorage.setItem('app_data','');
  }

  onRefresh() {
    console.log("Just testing !!!!!!!!!!");
    let dt = localStorage.getItem("app_data");
    if (dt) {
      let value = JSON.parse(dt);
      this._service.getEmployees()
        .subscribe(resEmployeeData => {
          for (let item of resEmployeeData) {
            if (item.username === value.username && item.password === value.password) {
              //this.employees = item;
              this.empDataSr.setEmpInfo(item);
              this.empDataSr.loggedIn = true;
              switch (item.usertype) {
                case 'U': {
                  //screen = 'leave'
                  this.empDataSr.isAdmin = false;
                  break;
                }
                case 'A': {
                  //screen = 'admin'
                  this.empDataSr.isAdmin = true;
                  break;
                }
              }
            };
          }
        });
    }
  }

}
