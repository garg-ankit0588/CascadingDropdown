import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryDropDownComponent } from './country-drop-down/country-drop-down.component';
import { StateDropDownComponent } from './state-drop-down/state-drop-down.component';
import { CityDropDownComponent } from './city-drop-down/city-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDropDownComponent,
    StateDropDownComponent,
    CityDropDownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
