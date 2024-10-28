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

export const kilometersToMiles = (kilometers: number): string => {
  const value = kilometers / 1.60934; // 1 kilometer = 0.621371 miles
  return `${value} miles`;
};

export const kilometersToYards = (kilometers: number): string => {
  const value = kilometers * 1094; // 1 kilometer = 1094 yards
  return `${value} yards`;
};

export const kilometersToMeters = (kilometers: number): string => {
  const value = kilometers * 1000; // 1 kilometer = 1000 meters
  return `${value} meters`;
};

export const kilometersToFeet = (kilometers: number): string => {
  const value = kilometers * 3280.84; // 1 kilometer = 3280.84 feet
  return `${value} feet`;
};

export const yardsToMiles = (yards: number): string => {
  const value = yards / 1760; // 1 yard = 0.000568182 miles
  return `${value} miles`;
};

export const yardsToKilometers = (yards: number): string => {
  const value = yards / 1094; // 1 yard = 0.0009144 kilometers
  return `${value} kilometers`;
};

export const yardsToMeters = (yards: number): string => {
  const value = yards * 0.9144; // 1 yard = 0.9144 meters
  return `${value} meters`;
};

export const yardsToFeet = (yards: number): string => {
  const value = yards * 3; // 1 yard = 3 feet
  return `${value} feet`;
};

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

export const squareMilesToSquareKilometers = (
  squareMiles: number
): string => {
  const value = squareMiles * 2.58999; // 1 square mile = 2.58999 square kilometers
  return `${value} square kilometers`;
};

export const squareKilometersToSquareMiles = (
  squareKilometers: number
): string => {
  const value = squareKilometers / 2.58999; // 1 square kilometer = 0.386102 square miles
  return `${value} square miles`;
};
