export const millilitersToGallons = (milliliters: number): string => {
  const value = milliliters / 3785.41; // 1 gallon (US) = 3785.41 milliliters
  return `${value} gallons (US)`;
};

export const millilitersToLiters = (milliliters: number): string => {
  const value = milliliters / 1000; // 1 liter = 1000 milliliters
  return `${value} liters`;
};

export const millilitersToCentiliters = (milliliters: number): string => {
  const value = milliliters / 10; // 1 centiliter = 10 milliliters
  return `${value} centiliters`;
};

export const millilitersToPints = (milliliters: number): string => {
  const value = milliliters / 473.176; // 1 pint (US) = 473.176 milliliters
  return `${value} pints (US)`;
};
