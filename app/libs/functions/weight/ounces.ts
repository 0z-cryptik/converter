export const ouncesToPounds = (ounces: number): string => {
  const value = ounces / 16; // 1 ounce = 1/16 pound
  return `${value} lbs`;
};

export const ouncesToTons = (ounces: number): string => {
  const value = ounces / 32000; // 1 ounce = 1/32,000 ton (US)
  return `${value} tons (US)`;
};

export const ouncesToGrams = (ounces: number): string => {
  const value = ounces * 28.3495; // 1 ounce = 28.3495 grams
  return `${value} grams`;
};

export const ouncesToKilograms = (ounces: number): string => {
  const value = ounces * 0.0283495; // 1 ounce = 0.0283495 kilograms
  return `${value} kilograms`;
};
