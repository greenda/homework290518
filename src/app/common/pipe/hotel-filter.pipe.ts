import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../services/hotels-service.service';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: IHotel[], searchTerm: string): IHotel[] {
    if (!searchTerm) {
      return hotels;
    }
    return hotels.filter((hotel: IHotel) =>
      hotel.type.toLowerCase() === searchTerm.toLowerCase());
  }

}
