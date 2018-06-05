import { Component, Input } from '@angular/core';
import { IHotel } from '../../common/services/hotels-service.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent {
  @Input() hotel: IHotel;
  @Input() selectedHotel: IHotel;
}
