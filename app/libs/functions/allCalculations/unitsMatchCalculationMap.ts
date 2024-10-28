import * as lengthFunctions from "@/app/libs/functions/lengthFunctions";
import * as weightFunctions from "@/app/libs/functions/weightFunctions";
import * as temperatureFunctions from "@/app/libs/functions/temperatureFunctions";
import { UnitsMatchAndConvertMapType } from "./types";

export const unitsMatchAndConvertMap: UnitsMatchAndConvertMapType = {
  "º celcius": {
    "º fahrenheit": temperatureFunctions.celsiusToFahrenheit,
    "º kelvin": temperatureFunctions.celsiusToKelvin
  },
  "º fahrenheit": {
    "º celcius": temperatureFunctions.fahrenheitToCelsius,
    "º kelvin": temperatureFunctions.fahrenheitToKelvin
  },
  "º kelvin": {
    "º celcius": temperatureFunctions.kelvinToCelsius,
    "º fahrenheit": temperatureFunctions.kelvinToFahrenheit
  },
  "gram(s)": {
    "kilogram(s)": weightFunctions.gramsToKilograms,
    "ton(s)": weightFunctions.gramsToTons,
    "pound(s)": weightFunctions.gramsToPounds
  },
  "kilogram(s)": {
    "gram(s)": weightFunctions.kilogramsToGrams,
    "ton(s)": weightFunctions.kilogramsToTons,
    "pound(s)": weightFunctions.kilogramsToPounds
  },
  "ton(s)": {
    "gram(s)": weightFunctions.tonsToGrams,
    "kilogram(s)": weightFunctions.tonsToKilograms,
    "pound(s)": weightFunctions.tonsToPounds
  },
  "pound(s)": {
    "gram(s)": weightFunctions.poundsToGrams,
    "kilogram(s)": weightFunctions.poundsToKilograms,
    "ton(s)": weightFunctions.poundsToTons
  },
  "mile(s)": {
    "kilometer(s)": lengthFunctions.milesToKilometers,
    "yard(s)": lengthFunctions.milesToYards,
    "meter(s)": lengthFunctions.milesToMeters,
    "feet(s)": lengthFunctions.milesToFeet
  },
  "kilometer(s)": {
    "mile(s)": lengthFunctions.kilometersToMiles,
    "yard(s)": lengthFunctions.kilometersToYards,
    "meter(s)": lengthFunctions.kilometersToMeters,
    "feet(s)": lengthFunctions.kilometersToFeet
  },
  "yard(s)": {
    "mile(s)": lengthFunctions.yardsToMiles,
    "kilometer(s)": lengthFunctions.yardsToKilometers,
    "meter(s)": lengthFunctions.yardsToMeters,
    "feet(s)": lengthFunctions.yardsToFeet
  },
  "meter(s)": {
    "mile(s)": lengthFunctions.metersToMiles,
    "kilometer(s)": lengthFunctions.metersToKilometers,
    "yard(s)": lengthFunctions.metersToYards,
    "feet(s)": lengthFunctions.metersToFeet
  },
  "feet(s)": {
    "mile(s)": lengthFunctions.feetToMiles,
    "kilometer(s)": lengthFunctions.feetToKilometers,
    "yard(s)": lengthFunctions.feetToYards,
    "meter(s)": lengthFunctions.feetToMeters
  },
  "square mile(s)": {
    "square kilometer(s)": lengthFunctions.squareMilesToSquareKilometers
  },
  "square kilometer(s)": {
    "square mile(s)": lengthFunctions.squareKilometersToSquareMiles
  }
};
