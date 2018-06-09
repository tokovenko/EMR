export const number = (value = 0, digits = 0) => {
  const fixed = value.toFixed(digits);
  return fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
