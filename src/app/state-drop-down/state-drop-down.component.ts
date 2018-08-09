import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../models/state.model';

@Component({
  selector: 'app-state-drop-down',
  templateUrl: './state-drop-down.component.html',
  styleUrls: ['./state-drop-down.component.css']
})
export class StateDropDownComponent implements OnInit {
  @Input() states: State;
  @Output() changeState: EventEmitter<State> = new EventEmitter<State>();
  constructor() { }

  ngOnInit() {
  }
  onStateChange(data: any){
    console.log(data);
    this.changeState.emit(data);
   }
}
