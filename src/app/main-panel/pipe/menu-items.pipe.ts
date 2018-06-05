import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../../hotels';

@Pipe({
  name: 'menuItems'
})
export class MenuItemsPipe implements PipeTransform {

  public transform(hotels: Hotel[]): String[] {
    return Array.from(hotels.reduce((menuItems: Set<String>, hotel: Hotel) => {
      menuItems.add(hotel.type);
      return menuItems;
    }, new Set()));
  }

}
