import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel, hotelList$ } from '../hotels';
import { Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  public selectedHotel: Hotel;
  public searchTerm: string;

  @Input() hotelList: Hotel[];
  @Output() selectHotel: EventEmitter<Hotel> = new EventEmitter();

  public onSelectHotel(hotel: Hotel): void {
    this.selectedHotel = hotel;
    this.selectHotel.emit(hotel);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.hotelList);
    this.searchTerm = 'Hotel';
    this.selectedHotel = this.hotelList[0];
    this.selectHotel.emit(this.selectedHotel);
  }

  public setSearchTerm(term: string): void {
    console.log(term);
    this.searchTerm = term;
    console.log('setSearchTerm');
  }

  public updateSelectedHotel() {
    console.log('updateSelectedHotel');
    this.selectedHotel = this.hotelList.find((element: Hotel) =>
      element.type.toLocaleLowerCase() === this.searchTerm.toLocaleLowerCase());
  }

}
