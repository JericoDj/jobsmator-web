/** Peso amounts as the paywall shows them: no decimals, thousands separated. */
export const peso = (amount: number) => `₱${amount.toLocaleString("en-PH")}`;

/** "₱167" — what a yearly plan works out to per month. */
export const perMonth = (yearly: number) => peso(Math.round(yearly / 12));

/** How much cheaper the yearly plan is, as a whole percentage. */
export const savingsPercent = (monthly: number, yearly: number) =>
  Math.round((1 - yearly / (monthly * 12)) * 100);
