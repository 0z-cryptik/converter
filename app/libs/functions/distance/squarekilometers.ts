export const squareKilometersToSquareMiles = (
  squareKilometers: number
): string => {
  const value = squareKilometers / 2.58999; // 1 square kilometer = 0.386102 square miles
  return `${value} square miles`;
};

export const squareKilometersToKilometers = (
  squareKilometers: number
): string => {
  if (squareKilometers < 0) {
    return "Invalid input";
  }

  const value = Math.sqrt(squareKilometers); // Square root of the area
  return `${value} kilometers`;
};

export const squareKilometersToMeters = (
  squareKilometers: number
): string => {
  const value = Math.sqrt(squareKilometers) * 1000; // 1 kilometer = 1,000 meters
  return `${value} meters`;
};

export const squareKilometersToMiles = (
  squareKilometers: number
): string => {
  const value = Math.sqrt(squareKilometers) / 1.60934; // 1 kilometer = 1.60934 miles
  return `${value} miles`;
};

export const squareKilometersToFeet = (
  squareKilometers: number
): string => {
  const value = Math.sqrt(squareKilometers) * 3280.84; // 1 kilometer = 3,280.84 feet
  return `${value} feet`;
};

export const squareKilometersToYards = (
  squareKilometers: number
): string => {
  const value = Math.sqrt(squareKilometers) * 1093.61; // 1 kilometer = 1,093.61 yards
  return `${value} yards`;
};
