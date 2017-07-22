import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CarProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CarProvider {
  url: string;

  constructor(public http: Http) {
    //this.url = "http://localhost:8100/api/";
    this.url = "https://car-rental-reserve.000webhostapp.com/api/";

  }

  getCategory(){
    return this.http.get(this.url+"v1/cars").map(res => res.json());
  }

  getCars(car){
    return this.http.get(this.url+"v1/cars/"+car).map(res=> res.json());
  }

}
