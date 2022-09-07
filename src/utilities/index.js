import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy-MM-dd HH:mm:ss');

}
