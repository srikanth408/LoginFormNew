import { Component } from '@angular/core';
import { LeavedataService } from '../app.leaveservice';



@Component({
    templateUrl: 'app/Admin/app.admin.component.html',
    providers: [LeavedataService],
})

export class AdminComponent {
    private employee: any;
    private approve: boolean = true;
    private reject: boolean = true;
    private editedIndex: boolean;

    constructor(private _service: LeavedataService) {

    }
    ngOnInit() {
        this._service.getEmployees()
            .subscribe(data => this.employee = data);
    }

}
