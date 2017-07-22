import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';


@Component({
  selector: 'page-car-list',
  templateUrl: 'car-list.html',
})
export class CarListPage {
  data : any;
  cars : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public carProv: CarProvider) {
    this.data = this.navParams.data;
  }

  ionViewDidEnter() {
    this.carProv.getCars(this.data.id).subscribe( cars => {
      console.log(this.cars = cars.data);
    });

  }

}
