import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../../hotels';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], searchTerm: string): Hotel[] {
    if (!searchTerm) {
      return hotels;
    }
    return hotels.filter((hotel: Hotel) =>
      hotel.type.toLowerCase() === searchTerm.toLowerCase());
  }

}
