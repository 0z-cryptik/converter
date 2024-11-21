export const feetToMiles = (feet: number): string => {
  const value = feet / 5280; // 1 foot = 0.000189394 miles
  return `${value} miles`;
};

export const feetToKilometers = (feet: number): string => {
  const value = feet / 3280.84; // 1 foot = 0.0003048 kilometers
  return `${value} kilometers`;
};

export const feetToYards = (feet: number): string => {
  const value = feet / 3; // 1 foot = 0.333333 yards
  return `${value} yards`;
};

export const feetToMeters = (feet: number): string => {
  const value = feet / 3.28084; // 1 foot = 0.3048 meters
  return `${value} meters`;
};

export const feetToSquareKilometers = (feet: number): string => {
  const value = (feet / 3280.84) ** 2 / 1_000_000; // 1 foot = 1/3280.84 kilometers
  return `${value} square kilometers`;
};

export const feetToSquareMiles = (feet: number): string => {
  const value = (feet / 5280) ** 2; // 1 foot = 1/5280 miles
  return `${value} square miles`;
};
