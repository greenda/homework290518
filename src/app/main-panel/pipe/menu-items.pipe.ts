import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../../common/services/hotels-service.service';

@Pipe({
  name: 'menuItems'
})
export class MenuItemsPipe implements PipeTransform {

  public transform(hotels: IHotel[]): String[] {
    return Array.from(hotels.reduce((menuItems: Set<String>, hotel: IHotel) => {
      menuItems.add(hotel.type);
      return menuItems;
    }, new Set()));
  }

}
