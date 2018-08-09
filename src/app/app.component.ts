import { Component, OnInit, OnChanges } from '@angular/core';
import { Country } from './models/country.model';
import { State } from './models/state.model';
import { City } from './models/city.model';
import { CountryService } from './services/country/country.service';
import { StateService } from './services/state/state.service';
import { CityService } from './services/city/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  constructor(
    private countryService: CountryService,
    private stateService: StateService,
    private cityService: CityService
  ){}
  countries: Country[];
  states: State[];
  allStates: State[];
  cities: City[];
  allCities: City[];

   ngOnInit(){
     this.countries = this.countryService.getCountries();
     this.allStates = this.stateService.getStates();
     this.allCities = this.cityService.getCities();
   }

  onCountryChangeEvent(data: any){
    const selectedCountryId = data.target.value
    this.states = this.allStates.filter(r=>r.countryId == selectedCountryId);
    this.cities =[];
  }

  onStateChangeEvent(data: any){
    const selectedStateId = data.target.value
    this.cities = this.allCities.filter(r=>r.stateId == selectedStateId);
  }

}
