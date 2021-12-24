interface IFormatCurrency {
  amount: string | number;
  currency?: "GBP" | string;
  locale?: "en-GB" | string;
}

function formatCurrency({
  amount,
  currency = "GBP",
  locale = "en-GB",
}: IFormatCurrency) {
  let num: number;
  if (typeof amount == "string") {
    num = parseInt(amount);
  } else {
    num = amount;
  }
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(num);
}

export { formatCurrency };
