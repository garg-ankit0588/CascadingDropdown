import { Component, OnInit, Input } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-city-drop-down',
  templateUrl: './city-drop-down.component.html',
  styleUrls: ['./city-drop-down.component.css']
})
export class CityDropDownComponent implements OnInit {
  @Input() cities: City;
  constructor() { }

  ngOnInit() {
  }

}
