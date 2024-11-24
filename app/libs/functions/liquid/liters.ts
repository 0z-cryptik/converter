export const litersToMilliliters = (liters: number): string => {
  const value = liters * 1000; // 1 liter = 1000 milliliters
  return `${value} milliliters`;
};

export const litersToCentiliters = (liters: number): string => {
  const value = liters * 100; // 1 liter = 100 centiliters
  return `${value} centiliters`;
};

export const litersToPints = (liters: number): string => {
  const value = liters * 2.11338; // 1 liter = 2.11338 pints 
  return `${value} pints (US)`;
};

export const litersToGallons = (liters: number): string => {
  const value = liters * 0.264172; // 1 liter = 0.264172 gallons 
  return `${value} gallons (US)`;
};
