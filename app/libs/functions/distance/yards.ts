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

export const yardsToSquareKilometers = (yards: number): string => {
  const value = (yards / 1093.61) ** 2 / 1_000_000; // 1 yard = 1/1093.61 kilometers
  return `${value} square kilometers`;
};

export const yardsToSquareMiles = (yards: number): string => {
  const value = (yards / 1760) ** 2; // 1 yard = 1/1760 miles
  return `${value} square miles`;
};
