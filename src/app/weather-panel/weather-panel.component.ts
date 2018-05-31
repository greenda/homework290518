import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../hotels';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {

  @Input() selectedHotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

}
