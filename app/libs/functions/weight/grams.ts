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

export const gramsToOunces = (grams: number): string => {
  const value = grams * 0.035274; // 1 gram = 0.035274 ounces
  return `${value} ounces`;
};
