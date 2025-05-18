export const formatPrice = (price: number, currency: string) => {
  if (price && currency) {
    return (
      price?.toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + ` ${currency}`
    );
  }
  return '';
};
