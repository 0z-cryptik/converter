import * as celsiusFunctions from "@/app/libs/functions/temperature/celsius";
import * as fahrenheitFunctions from "@/app/libs/functions/temperature/fahrenheit";
import * as kelvinFunctions from "@/app/libs/functions/temperature/kelvin";
import { UnitsMatchMapType } from "../types/types";

export const temperatureMap: UnitsMatchMapType = {
  "º celsius": {
    "º fahrenheit": celsiusFunctions.celsiusToFahrenheit,
    "º kelvin": celsiusFunctions.celsiusToKelvin
  },
  "º fahrenheit": {
    "º celsius": fahrenheitFunctions.fahrenheitToCelsius,
    "º kelvin": fahrenheitFunctions.fahrenheitToKelvin
  },
  "º kelvin": {
    "º celsius": kelvinFunctions.kelvinToCelsius,
    "º fahrenheit": kelvinFunctions.kelvinToFahrenheit
  }
};
