export const tonsToGrams = (tons: number): string => {
  const value = tons * 1_000_000; // 1 ton = 1,000,000 g
  return `${value} g`;
};

export const tonsToKilograms = (tons: number): string => {
  const value = tons * 1000; // 1 ton = 1000 kg
  return `${value} kg`;
};

export const tonsToPounds = (tons: number): string => {
  const value = tons * 2204.62; // 1 ton = 2204.62 lbs
  return `${value} lbs`;
};

export const tonsToOunces = (tons: number): string => {
  const value = tons * 32_000; // 1 ton (US) = 32,000 ounces
  return `${value} ounces`;
};
