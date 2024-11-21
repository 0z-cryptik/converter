export const squareMilesToMeters = (squareMiles: number): string => {
  const value = Math.sqrt(squareMiles) * 1609.34 * 1000; // 1 mile = 1,609.34 meters
  return `${value} meters`;
};

export const squareMilesToKilometers = (squareMiles: number): string => {
  const value = Math.sqrt(squareMiles) * 1.60934; // 1 mile = 1.60934 kilometers
  return `${value} kilometers`;
};

export const squareMilesToMiles = (squareMiles: number): string => {
  const value = Math.sqrt(squareMiles); // Square miles to miles (linear)
  return `${value} miles`;
};

export const squareMilesToFeet = (squareMiles: number): string => {
  const value = Math.sqrt(squareMiles) * 5280; // 1 mile = 5,280 feet
  return `${value} feet`;
};

export const squareMilesToYards = (squareMiles: number): string => {
  const value = Math.sqrt(squareMiles) * 1760; // 1 mile = 1,760 yards
  return `${value} yards`;
};

export const squareMilesToSquareKilometers = (
  squareMiles: number
): string => {
  const value = squareMiles * 2.58999; // 1 square mile = 2.58999 square kilometers
  return `${value} square kilometers`;
};
