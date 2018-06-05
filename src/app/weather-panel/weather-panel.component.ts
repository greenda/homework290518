import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../hotels';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent {

  @Input() selectedHotel: IHotel;
}
