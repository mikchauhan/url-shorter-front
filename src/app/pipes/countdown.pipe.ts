import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'countdown',
  standalone: true,
  pure: false

})
export class CountdownPipe implements PipeTransform {
  transform(futureDate: string | Date): string {
    if (!futureDate) return '';
    const target = moment(futureDate);
    const now = moment();

    if (target.isBefore(now)) return 'Expired';

    const years = target.diff(now, 'years'); now.add(years, 'years');
    const months = target.diff(now, 'months'); now.add(months, 'months');
    const days = target.diff(now, 'days'); now.add(days, 'days');
    const hours = target.diff(now, 'hours'); now.add(hours, 'hours');
    const minutes = target.diff(now, 'minutes'); now.add(minutes, 'minutes');
    const seconds = target.diff(now, 'seconds');

    return `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
