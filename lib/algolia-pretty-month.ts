import { parseISO, isThisMonth, isThisYear, format } from 'date-fns'

export function AlgoliaPrettyMonth(label: string) {
  const month = parseISO(label);

  if (isThisMonth(month)) {
    return 'This Month';
  }

  if (isThisYear(month)) {
    return format(month, 'MMMM');
  }

  return format(month, 'MMMM yyyy');
}
