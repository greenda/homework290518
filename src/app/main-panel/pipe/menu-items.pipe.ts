import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../../hotels';

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
