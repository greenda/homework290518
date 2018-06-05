import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../common/services/hotels-service.service';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent {

  @Input() selectedHotel: IHotel;
}
