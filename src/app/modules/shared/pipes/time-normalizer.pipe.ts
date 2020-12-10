import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeNormalizer'
})
export class TimeNormalizerPipe implements PipeTransform {

  transform(minutes: number | string): string {
    if (typeof minutes === 'string') {
      minutes = parseInt(minutes)
    }

    if (!minutes) {
      return ''
    }

    let minutesGiven = minutes;
    let hoursResult = 0;
    let minutesResult;
    while (minutesGiven >= 60) {
      minutesGiven -= 60;
      if(minutesGiven >= 0) {
        hoursResult++
      } else {
        break;
      }
    }
    minutesResult = minutesGiven
    if (minutesResult === 0) {
      return `${hoursResult}h`;
    } else if (hoursResult === 0) {
      return `${minutesResult}min`;
    } else {
      return `${hoursResult}h ${minutesResult}min`;
    }
  }

}
