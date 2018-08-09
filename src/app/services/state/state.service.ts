import { Injectable } from '@angular/core';
import { State } from '../../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  private allStates: State[]  =  [{
    id:  1,
    stateName:  'Madhya Pradesh',
    countryId: 1

  }, {
    id:  2,
    stateName:  'Telangana',
    countryId: 1
    
  }, {
    id:  3,
    stateName:  'New York',
    countryId: 2

  }];

  getStates(){
    return this.allStates;
  }
}
