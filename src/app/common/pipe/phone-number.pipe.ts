import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phone: number, args?: any): any {
    const phoneString: string = phone.toString(10);
    return ` Tel:+${phoneString.slice(1, 5)} ${phoneString.slice(6, 9)} ${phoneString.slice(9, 13)}`;
  }

}
