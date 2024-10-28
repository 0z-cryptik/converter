export const gramsToKilograms = (grams: number): string => {
  const value = grams / 1000; // 1 kg = 1000 g
  return `${value} kg`;
};

export const gramsToTons = (grams: number): string => {
  const value = grams / 1_000_000; // 1 ton = 1,000,000 g
  return `${value} tons`;
};

export const gramsToPounds = (grams: number): string => {
  const value = grams * 0.00220462; // 1 g = 0.00220462 lbs
  return `${value} lbs`;
};

export const kilogramsToGrams = (kilograms: number): string => {
  const value = kilograms * 1000; // 1 kg = 1000 g
  return `${value} g`;
};

export const kilogramsToTons = (kilograms: number): string => {
  const value = kilograms / 1000; // 1 ton = 1000 kg
  return `${value} tons`;
};

export const kilogramsToPounds = (kilograms: number): string => {
  const value = kilograms * 2.20462; // 1 kg = 2.20462 lbs
  return `${value} lbs`;
};

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

export const poundsToGrams = (pounds: number): string => {
  const value = pounds / 0.00220462; // 1 lb = 453.592 g
  return `${value} g`;
};

export const poundsToKilograms = (pounds: number): string => {
  const value = pounds / 2.20462; // 1 lb = 0.453592 kg
  return `${value} kg`;
};

export const poundsToTons = (pounds: number): string => {
  const value = pounds / 2204.62; // 1 lb = 0.000453592 tons
  return `${value} tons`;
};
