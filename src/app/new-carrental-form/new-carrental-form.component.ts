import { Time } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { CarrentalService } from '../carrental.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-carrental-form',
  templateUrl: './new-carrental-form.component.html',
  styleUrls: ['./new-carrental-form.component.css']
})
export class NewCarrentalFormComponent implements OnInit {
  @Input() ft_Nm: string;
  @Input() lt_Nm: string;
  @Input() em_Id: string;
  @Input() mbl_Num: string;
  @Input() lisn_Num: string;
  @Input() p_d_Loc: string;
  @Input() pickup_Dt: string;
  @Input() pickup_Tym: string;
  @Input() dropoff_Dt: string;
  @Input() dropoff_Tym: string;
  @Input() find_my_Car: string;
  // public route: ActivatedRoute;
  public mode = 'Add'; //default mode
  private id: string; //car ID 

  onSubmit() {
    console.log("You submitted: " + this.ft_Nm + " " + this.lt_Nm + " " + this.em_Id + " " + this.mbl_Num + " " + 
    this.lisn_Num + " " + this.p_d_Loc + " " + this.pickup_Dt + " " + this.pickup_Tym + " " + this.dropoff_Dt + " " + this.dropoff_Tym + " " + this.find_my_Car);
    if (this.mode == 'Add')
      this._myService.addCarrentals(this.ft_Nm, this.lt_Nm, this.em_Id, this.mbl_Num, this.lisn_Num,
        this.p_d_Loc, this.pickup_Dt, this.pickup_Tym, this.dropoff_Dt, this.dropoff_Tym, this.find_my_Car);
    if (this.mode == 'Edit')
      this._myService.updateCarrental(this.id, this.ft_Nm, this.lt_Nm, this.em_Id, this.mbl_Num, this.lisn_Num,
        this.p_d_Loc, this.pickup_Dt, this.pickup_Tym, this.dropoff_Dt, this.dropoff_Tym, this.find_my_Car);

    // this._myService.addCarrentals(this.ft_Nm, this.lt_Nm, this.em_Id,this.mbl_Num,this.lisn_Num,
    //                               this.p_d_Loc,this.pickup_Dt,this.pickup_Tym, this.dropoff_Dt,this.dropoff_Tym,this.find_my_Car); 
    this.router.navigate(['/listCars']);  
  }

  //initialize the call using CarrentalService 
  constructor(private _myService: CarrentalService, private router: Router, public route:ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');
      }
      else {
        this.mode = 'Add';
        this.id = null;
      }
    });  

  }

} 
