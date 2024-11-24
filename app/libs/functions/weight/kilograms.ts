export const kilogramsToGrams = (kilograms: number): string => {
  const value = kilograms * 1000; // 1 kg = 1000 g
  return `${value} g`;
};

export const kilogramsToTons = (kilograms: number): string => {
  const value = kilograms / 1000; // 1 ton = 1000 kg
  return `${value} tons (US)`;
};

export const kilogramsToPounds = (kilograms: number): string => {
  const value = kilograms * 2.20462; // 1 kg = 2.20462 lbs
  return `${value} lbs`;
};

export const kilogramsToOunces = (kilograms: number): string => {
  const value = kilograms * 35.274; // 1 kilogram = 35.274 ounces
  return `${value} ounces`;
};
