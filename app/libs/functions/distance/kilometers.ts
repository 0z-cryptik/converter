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

export const kilometersToSquareKilometers = (
  kilometers: number
): string => {
  const value = kilometers ** 2;
  return `${value} square kilometers`;
};

export const kilometersToSquareMiles = (kilometers: number): string => {
  const value = (kilometers / 1.60934) ** 2; // 1 kilometer = 1/1.60934 miles
  return `${value} square miles`;
};
