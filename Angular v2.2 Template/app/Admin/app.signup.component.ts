import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { EmployeedataService } from '../app.service';
import { NgForm } from '@angular/forms';


@Component({
    selector:'signup',
    templateUrl:'app/Admin/app.signup.component.html',
    providers:[EmployeedataService],
 
})

export class SignupComponent {
   private manager_list: any[] = [
                    {name: 'Gokul Janarthanan', department:"QA"},  
                    {name: 'Rajdeep Biswas', department: "IT"},  
                    {name: 'Venkat', department:"Developement"}
                    ];
    private selectedPerson: any =  {};
    private showId:boolean=true;
    constructor( private route:Router,private _restfull:EmployeedataService){}
   
    onSubmit(value:Object){
    this._restfull.saveRetur(value)
    .subscribe((dataResponse) => { console.log("exec " + dataResponse); }); 

    
}
      onChanged($event :any){
        var match = this.manager_list.find(x => x.name === $event);
        this.selectedPerson.dept = match.department;
      }
      
onchange($event :any){
if($event==="onsite"){
    this.showId = false;
}else{
    this.showId = true;
    this.selectedPerson.dept=null;
}
}















  }





   
        
  
    
