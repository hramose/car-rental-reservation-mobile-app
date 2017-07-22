import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { CarListPage } from '../car-list/car-list';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cars: any;
  cars2 :any;
  constructor(public navCtrl: NavController, public carProv : CarProvider) {

  }
  ionViewDidEnter(){
    this.carProv.getCategory().subscribe(cars => {
      this.cars = cars.data;
    });
  }

  clickCars(car){
    this.navCtrl.push(CarListPage, car);
  }

}
