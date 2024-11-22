export const gallonsToMilliliters = (gallons: number): string => {
  const value = gallons * 3785.41; // 1 gallon (US) = 3785.41 milliliters
  return `${value} milliliters`;
};

export const gallonsToLiters = (gallons: number): string => {
  const value = gallons * 3.78541; // 1 gallon (US) = 3.78541 liters
  return `${value} liters`;
};

export const gallonsToCentiliters = (gallons: number): string => {
  const value = gallons * 378.541; // 1 gallon (US) = 378.541 centiliters
  return `${value} centiliters`;
};

export const gallonsToPints = (gallons: number): string => {
  const value = gallons * 8; // 1 gallon (US) = 8 pints
  return `${value} pints`;
};