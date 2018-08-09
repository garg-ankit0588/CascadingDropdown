import { Injectable } from '@angular/core';
import { City } from '../../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }
  private allCities: City[]  =  [
    {
     id:  1, cityName:  'Bhopal',  stateId: 1
 }, {
     id:  2, cityName:  'Indore',    stateId: 1    
 }, {
     id:  3, cityName:  'Jabalpur',  stateId: 1
 }, {
     id:  4, cityName:  'Secundrabad',  stateId: 2
 }, {
     id:  5, cityName:  'Hyderabad', stateId: 2
 }, {
     id:  6, cityName:  'New York', stateId: 3
  }];

  getCities(){
    return this.allCities;
  }
}
