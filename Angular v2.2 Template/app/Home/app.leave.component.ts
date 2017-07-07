import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedataService } from '../app.service';
import { EmpDataService } from '../app.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { holidayService } from '../app.holidayservice';


@Component({
    selector: 'leave',
    templateUrl: 'app/Home/app.leave.component.html',
    providers: [EmployeedataService, holidayService]

})

export class LeaveComponent {
    private leaveHistory: any = [];
    private employees: any = {};
    private data: Observable<any>;
    newEntry: any = {};
    private leave: any = {};
    private leaves: number;
    private holidays: any;

    constructor(private routes: Router, private _service: EmployeedataService, private empDataSr: EmpDataService, private _hservice: holidayService) { }

    ngOnInit() {
        //this.data =  new Observable<EmpDataService>((observer: Observer<EmpDataService>) =>{
        this.employees = this.empDataSr.getEmpInfo();
        //});

        //     let subscription = this.data.subscribe(
        //       value => {this.employees = value; console.log(value)}
        //   );

        this._hservice.getHolidays()
            .subscribe(data => this.holidays = data);
    }
    OnSubmit(value: any) {
        this.leaveHistory.push(value);
        this._service.LeaveRetur(value)
            .subscribe((dataResponse) => { console.log("exec " + dataResponse); });
    }

    get isAdmin() {
        return this.empDataSr.isAdmin;
    }
    onChange(value: any) {
        var fromdate = this.leave.fromdate;
        var todate = this.leave.todate;
        fromdate = new Date(fromdate);
        todate = new Date(todate);

        let date1_unixtime = fromdate.getTime() / 1000;
        let date2_unixtime = todate.getTime() / 1000;
        var timeDifference = date2_unixtime - date1_unixtime;
        var timeDifferenceInHours = timeDifference / 60 / 60;
        var timeDifferenceInDays = timeDifferenceInHours / 24 + 1;


        var month = fromdate.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var day = fromdate.getDate();
        day = day < 10 ? '0' + day : day;
        var year = fromdate.getFullYear();
        var date1 = month + "/" + day + "/" + year;
        var month = todate.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var day = todate.getDate();
        day = day < 10 ? '0' + day : day;
        var year = todate.getFullYear();
        var date2 = month + "/" + day + "/" + year;
        var startDate = new Date(fromdate);
        var endDate = new Date(todate);
        var totalWeekdays = 0;
        for (var i = startDate; i <= endDate;) {
            if (i.getDay() == 0 || i.getDay() == 6) {
                totalWeekdays++;
            }
            i.setTime(i.getTime() + 1000 * 60 * 60 * 24);
        }

       var count = 0;
       console.log(count);
        for (let i = 0; i < this.holidays.length; i++) {
            var today = new Date(this.holidays[i]);
            if ((this.holidays[i] <= date2 && this.holidays[i] >= date1) && (today.getDay() !== 0 && today.getDay() !== 6)) {
                count++;
                console.log(count);
            }

        }
              this.leaves = timeDifferenceInDays - totalWeekdays - count;

    }

}

