import parseISO from 'date-fns/parseISO';

function parseDate(date: string|Date) {
  return date instanceof Date ? date : parseISO(date);
}

function FormatDate(date: string|Date, options?: Intl.DateTimeFormatOptions) {
  date = parseDate(date);

  options = options || {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

function FormatTime(date: string|Date, options?: Intl.DateTimeFormatOptions) {
  date = parseDate(date);

  options = options || {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    dayPeriod: 'short',
  };

  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

function FormatDateTime(date: string|Date, options?: Intl.DateTimeFormatOptions) {
  date = parseDate(date);

  options = options || {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    dayPeriod: 'short',
  };

  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

export { FormatDate, FormatTime, FormatDateTime };
