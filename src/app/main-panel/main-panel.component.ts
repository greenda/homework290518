import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel, hotelList$ } from '../hotels';
import { Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  public selectedHotel: IHotel;
  public searchTerm: string;

  @Input() hotelList: IHotel[];
  @Output() selectHotel: EventEmitter<IHotel> = new EventEmitter();

  public onSelectHotel(hotel: IHotel): void {
    this.selectedHotel = hotel;
    this.selectHotel.emit(hotel);
  }

  public setSearchTerm(term: string): void {
    this.searchTerm = term;
  }

  public updateSelectedHotel() {
    this.selectedHotel = this.hotelList.find((element: IHotel) =>
      element.type.toLocaleLowerCase() === this.searchTerm.toLocaleLowerCase());
    this.onSelectHotel(this.selectedHotel);
  }

  ngOnInit() {
    this.selectedHotel = this.hotelList[0];
    this.searchTerm = this.selectedHotel.type;
    this.selectHotel.emit(this.selectedHotel);
  }
}
