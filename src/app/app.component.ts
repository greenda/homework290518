import { Component, OnInit } from '@angular/core';
import { IHotel, HotelsService } from './common/services/hotels-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public hotelList: Observable<IHotel[]>;
  public selectedHotel: IHotel;

  public selectHotel(hotel: IHotel) {
    this.selectedHotel = hotel;
  }

  public constructor(private _hotelsService: HotelsService) {
  }

  public ngOnInit(): void {
    this.hotelList = this._hotelsService.getHotels();
  }
}
