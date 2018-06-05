import { Component } from '@angular/core';
import { IHotel, hotelList$ } from './hotels';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public hotelList: Observable<IHotel[]> = hotelList$;
  public selectedHotel: IHotel;

  public selectHotel(hotel: IHotel) {
    this.selectedHotel = hotel;
  }

}
