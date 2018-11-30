import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import {Car} from './car';
import {CARS} from './mock-cars';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CarService {

  cars: Car[];

  constructor(private http: HttpClient) {
  }

  getCarsWithPromise(): Promise<Car[]> {
    console.log(Promise.resolve(CARS));
    return Promise.resolve(CARS);
  }

  public getCarsWithObservable(): Observable<Car[]> {
    return this.http.get('http://localhost:8080/cars').map((response: Response) => response || []);
  }

  addCar(car): Observable<Car> {
    return this.http.post<Car>('http://localhost:8080/cars', car, httpOptions)      .catch((err) => {
      return Observable.throw(err);
    });
  }

  getCar(plateNumber: string): Promise<Car> {
    console.log(Promise.resolve(CARS));
    return Promise.resolve(CARS.find(car => car.plateNumber === plateNumber));
  }

  getCarWithObservable(plateNumber): Observable<Car> {
    return this.http.get('http://localhost:8080/cars/' + plateNumber);
  }

  rent(car): Observable<any> {
    car.rented = true;
    return this.http.put('http://localhost:8080/cars/' + car.plateNumber + '?louer=true', null);
  }

  getBack(car): Observable<any> {
    car.rented = false;
    return this.http.put('http://localhost:8080/cars/' + car.plateNumber + '?louer=false', null);
  }

}
