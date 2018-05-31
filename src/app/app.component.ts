import { Component } from '@angular/core';
import { Hotel, hotelList$ } from './hotels';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public hotelList: Observable<Hotel[]> = hotelList$;
  public selectedHotel: Hotel;

  public selectHotel(hotel: Hotel) {
    this.selectedHotel = hotel;
  }

}
