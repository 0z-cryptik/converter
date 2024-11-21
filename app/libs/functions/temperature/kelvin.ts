export const kelvinToCelsius = (kelvin: number): string => {
  const value = kelvin - 273.15; // K - 273.15 = C
  return `${value} °C`;
};

export const kelvinToFahrenheit = (kelvin: number): string => {
  const value = ((kelvin - 273.15) * 9) / 5 + 32; // (K - 273.15) * 9/5 + 32 = F
  return `${value} °F`;
};
