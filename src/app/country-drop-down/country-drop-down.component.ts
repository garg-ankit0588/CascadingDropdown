import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-country-drop-down',
  templateUrl: './country-drop-down.component.html',
  styleUrls: ['./country-drop-down.component.css']
})
export class CountryDropDownComponent implements OnInit {

  @Input() countries : Country;
  @Output() change: EventEmitter<Country> = new EventEmitter<Country>()
  constructor() { }

  ngOnInit() {
  }

  onCountryChange(data: any){
   this.change.emit(data);
  }

}
