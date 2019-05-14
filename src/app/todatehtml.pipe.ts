import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todatehtml'
})
export class TodatehtmlPipe implements PipeTransform {

  transform(value: any): any {
    return value.dateTimeType;
  }

}
