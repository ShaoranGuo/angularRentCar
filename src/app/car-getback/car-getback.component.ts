import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-car-getback',
  templateUrl: './car-getback.component.html',
  styleUrls: ['./car-getback.component.css']
})

export class CarGetbackComponent implements OnInit {

  title = 'Car Rental';
  cars: Car[];
  selectedCar: Car;

  constructor(
    private carService: CarService,
    private location: Location
  ) {
  }

  getCars(): void {
    // this.carService.getCarsWithPromise().then(cars => this.cars = cars);
    this.carService.getCarsWithObservable().subscribe(
       res => {
           this.cars = res;
       }
    );
  }

  ngOnInit() {
    this.getCars();
  }

  cancelRental(): void {
    this.carService.getBack(this.selectedCar).subscribe(car => this.selectedCar = car);
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  goBack(): void {
    this.location.back();
  }

}
