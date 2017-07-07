import { Component } from '@angular/core';
import { EmployeedataService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'app/Admin/app.edituser.component.html',
  providers: [EmployeedataService],

})

export class EdituserComponent {

  private employee: any[];
  private editedIndex: boolean;
  private Save: boolean = false;
  private Edit: boolean = true;



  constructor(private _service: EmployeedataService, private route: Router) { }
  ngOnInit() {
    this._service.getEmployees()
      .subscribe(resEmployeeData => this.employee = resEmployeeData);
  }



  edit(document: any, i: any) {
    this.editedIndex = i;
    this.Save = true;
    this.Edit = false;
  }
  save(i: any) {
    this.editedIndex = false;
    this.Save = false;
    this.Edit = true;
    var savedata = this.employee[i];
    this._service.savedata(savedata)
      .subscribe((dataResponse) => { console.log("exec " + dataResponse); });

  }
  delete(i: number) {
  if (window.confirm("Are you sure want to delete")) {
    var deletedata = this.employee[i];
    this._service.deletedata(deletedata)
    .subscribe((dataResponse) => { console.log("exec " + dataResponse); });
      this.employee.splice(i, 1);
    }

  }

}