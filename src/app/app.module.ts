import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';
import { SocialInfoPanelComponent } from './social-info-panel/social-info-panel.component';
import { HotelFilterPipe } from './common/pipe/hotel-filter.pipe';
import { PhoneNumberPipe } from './common/pipe/phone-number.pipe';
import { HotelCardComponent } from './main-panel/hotel-card/hotel-card.component';
import { MenuItemsPipe } from './main-panel/pipe/menu-items.pipe';
import { HotelsService } from './common/services/hotels-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    WeatherPanelComponent,
    SocialInfoPanelComponent,
    HotelFilterPipe,
    PhoneNumberPipe,
    HotelCardComponent,
    MenuItemsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: HotelsService, useClass: HotelsService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
