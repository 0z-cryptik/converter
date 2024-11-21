export const milesToKilometers = (miles: number): string => {
  const value = miles * 1.60934; // 1 mile = 1.60934 kilometers
  return `${value} kilometers`;
};

export const milesToYards = (miles: number): string => {
  const value = miles * 1760; // 1 mile = 1760 yards
  return `${value} yards`;
};

export const milesToMeters = (miles: number): string => {
  const value = miles * 1609.34; // 1 mile = 1609.34 meters
  return `${value} meters`;
};

export const milesToFeet = (miles: number): string => {
  const value = miles * 5280; // 1 mile = 5280 feet
  return `${value} feet`;
};

export const milesToSquareKilometers = (miles: number): string => {
  const value = (miles * 1.60934) ** 2; // 1 mile = 1.60934 kilometers
  return `${value} square kilometers`;
};

export const milesToSquareMiles = (miles: number): string => {
  const value = miles ** 2; 
  return `${value} square miles`;
};
