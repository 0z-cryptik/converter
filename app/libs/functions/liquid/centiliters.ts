export const centilitersToMilliliters = (centiliters: number): string => {
  const value = centiliters * 10; // 1 centiliter = 10 milliliters
  return `${value} milliliters`;
};

export const centilitersToLiters = (centiliters: number): string => {
  const value = centiliters / 100; // 1 centiliter = 0.01 liters
  return `${value} liters`;
};

export const centilitersToPints = (centiliters: number): string => {
  const value = centiliters * 0.0211338; // 1 centiliter = 0.0211338 pints
  return `${value} pints`;
};

export const centilitersToGallons = (centiliters: number): string => {
  const value = centiliters * 0.00264172; // 1 centiliter = 0.00264172 gallons
  return `${value} gallons`;
};
