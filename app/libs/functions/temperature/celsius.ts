export const celsiusToFahrenheit = (celsius: number): string => {
  const value = (celsius * 9) / 5 + 32; // (C * 9/5) + 32 = F
  return `${value} °F`;
};

export const celsiusToKelvin = (celsius: number): string => {
  const value = celsius + 273.15; // C + 273.15 = K
  return `${value} K`;
};
