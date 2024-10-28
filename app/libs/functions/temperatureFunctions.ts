export const celsiusToFahrenheit = (celsius: number): string => {
  const value = (celsius * 9) / 5 + 32; // (C * 9/5) + 32 = F
  return `${value} °F`;
};

export const celsiusToKelvin = (celsius: number): string => {
  const value = celsius + 273.15; // C + 273.15 = K
  return `${value} K`;
};

export const fahrenheitToCelsius = (fahrenheit: number): string => {
  const value = ((fahrenheit - 32) * 5) / 9; // (F - 32) * 5/9 = C
  return `${value} °C`;
};

export const fahrenheitToKelvin = (fahrenheit: number): string => {
  const value = ((fahrenheit - 32) * 5) / 9 + 273.15; // (F - 32) * 5/9 + 273.15 = K
  return `${value} K`;
};

export const kelvinToCelsius = (kelvin: number): string => {
  const value = kelvin - 273.15; // K - 273.15 = C
  return `${value} °C`;
};

export const kelvinToFahrenheit = (kelvin: number): string => {
  const value = ((kelvin - 273.15) * 9) / 5 + 32; // (K - 273.15) * 9/5 + 32 = F
  return `${value} °F`;
};
