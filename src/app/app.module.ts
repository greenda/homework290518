import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';
import { SocialInfoPanelComponent } from './social-info-panel/social-info-panel.component';
import { HotelFilterPipe } from './common/pipe/hotel-filter.pipe';
import { PhoneNumberPipe } from './common/pipe/phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    WeatherPanelComponent,
    SocialInfoPanelComponent,
    HotelFilterPipe,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
