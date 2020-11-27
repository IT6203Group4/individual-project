import { Component, OnInit } from '@angular/core';
import { CarrentalService } from '../carrental.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

    //declare variable to hold response and make it public to be accessible from components.html
  public carrentals;
  //initialize the call using CarrentalService 
  constructor(private _myService: CarrentalService) { } 
  ngOnInit() {
    this.getCarrentals();
  }
  //method called OnInit
  getCarrentals() {
   this._myService.getCarrentals().subscribe(
      //read data and assign to public variable carrentals
      data => { this.carrentals = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  onDelete(carrentalId: string) {    
    this._myService.deleteCarrental(carrentalId);   
  }

} 
