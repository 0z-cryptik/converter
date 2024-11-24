export const pintsToMilliliters = (pints: number): string => {
  const value = pints * 473.176; // 1 pint (US) = 473.176 milliliters
  return `${value} milliliters`;
};

export const pintsToLiters = (pints: number): string => {
  const value = pints * 0.473176; // 1 pint (US) = 0.473176 liters
  return `${value} liters`;
};

export const pintsToCentiliters = (pints: number): string => {
  const value = pints * 47.3176; // 1 pint (US) = 47.3176 centiliters
  return `${value} centiliters`;
};

export const pintsToGallons = (pints: number): string => {
  const value = pints * 0.125; // 1 pint (US) = 0.125 gallons
  return `${value} gallons (US)`;
};