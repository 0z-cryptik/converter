export const fahrenheitToCelsius = (fahrenheit: number): string => {
  const value = ((fahrenheit - 32) * 5) / 9; // (F - 32) * 5/9 = C
  return `${value} °C`;
};

export const fahrenheitToKelvin = (fahrenheit: number): string => {
  const value = ((fahrenheit - 32) * 5) / 9 + 273.15; // (F - 32) * 5/9 + 273.15 = K
  return `${value} K`;
};
