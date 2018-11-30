import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'my-cars',
  templateUrl: './cars.component.html'
})

export class CarsComponent implements OnInit {

  title = 'Car Rental';
  cars: Car[];
  selectedCar: Car;
  car: Car;
  rForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router) { }

  getCars(): void {
    // this.carService.getCarsWithPromise().then(cars => this.cars = cars);
    this.carService.getCarsWithObservable().subscribe(
       res => {
           this.cars = res;
       }
    );
  }

  ngOnInit(): void {
    this.rForm = this.fb.group({
      'plateNumber' : [null, Validators.required],
      'brand' : [null, Validators.required],
      'price' : [null, Validators.required]
    });
    this.getCars();
  }

  addCar() {
    console.log(this.rForm.value);
    this.carService.addCar(this.rForm.value).subscribe(car => {this.car = car; this.getCars(); });
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCar.plateNumber]);
  }

}
