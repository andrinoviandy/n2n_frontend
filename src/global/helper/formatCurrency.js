export const formatCurrency = (value, dec = 2) => {
  if (value === null || value === undefined) {
    return value;
  }
  const formatedValue = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: dec }).format(value)
  return formatedValue;
};