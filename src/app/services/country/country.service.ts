import { Injectable } from '@angular/core';
import { Country } from '../../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  private countries : Country[]  =  [{
    id:  1,
    countryName:  'India',

  }, {
    id:  2,
    countryName:  'United States',
  }];

  getCountries(){
    return this.countries;
  }
}
