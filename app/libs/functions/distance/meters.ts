export const metersToMiles = (meters: number): string => {
  const value = meters / 1609.34; // 1 meter = 0.000621371 miles
  return `${value} miles`;
};

export const metersToKilometers = (meters: number): string => {
  const value = meters / 1000; // 1 meter = 0.001 kilometers
  return `${value} kilometers`;
};

export const metersToYards = (meters: number): string => {
  const value = meters * 1.09361; // 1 meter = 1.09361 yards
  return `${value} yards`;
};

export const metersToFeet = (meters: number): string => {
  const value = meters * 3.28084; // 1 meter = 3.28084 feet
  return `${value} feet`;
};

export const metersToSquareKilometers = (meters: number): string => {
  const value = (meters / 1000) ** 2; // 1 meter = 1/1000 kilometers
  return `${value} square kilometers`;
};

export const metersToSquareMiles = (meters: number): string => {
  const value = (meters / 1609.34) ** 2; // 1 meter = 1/1609.34 miles
  return `${value} square miles`;
};
