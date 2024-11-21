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

export const poundsToOunces = (pounds: number): string => {
  const value = pounds * 16; // 1 pound = 16 ounces
  return `${value} ounces`;
};
