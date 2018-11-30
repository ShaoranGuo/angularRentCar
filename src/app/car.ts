import { Rent } from './rent';

export class Car {
  id: number;
  plateNumber: string;
  brand: String;
  price: number;
  numberOfDays: number;
  rented: boolean;
  rents: Rent[];
}
