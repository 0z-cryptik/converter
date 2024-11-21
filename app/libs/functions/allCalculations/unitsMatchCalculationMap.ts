import * as lengthFunctions from "@/app/libs/functions/lengthFunctions";

// weight related imports
import * as tonsFunctions from "@/app/libs/functions/weight/tons";
import * as kilogramFunctions from "@/app/libs/functions/weight/kilograms";
import * as gramFunctions from "@/app/libs/functions/weight/grams";
import * as poundFunctions from "@/app/libs/functions/weight/pounds";
import * as ouncesFunctions from "@/app/libs/functions/weight/ounces";

// temperature related imports
import * as celsiusFunctions from "@/app/libs/functions/temperature/celsius";
import * as fahrenheitFunctions from "@/app/libs/functions/temperature/fahrenheit";
import * as kelvinFunctions from "@/app/libs/functions/temperature/kelvin";

import { UnitsMatchAndConvertMapType } from "./types";

export const unitsMatchAndConvertMap: UnitsMatchAndConvertMapType = {
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
  },
  "gram(s)": {
    "kilogram(s)": gramFunctions.gramsToKilograms,
    "ton(s)": gramFunctions.gramsToTons,
    "pound(s)": gramFunctions.gramsToPounds,
    "ounce(s)": gramFunctions.gramsToOunces
  },
  "kilogram(s)": {
    "gram(s)": kilogramFunctions.kilogramsToGrams,
    "ton(s)": kilogramFunctions.kilogramsToTons,
    "pound(s)": kilogramFunctions.kilogramsToPounds,
    "ounce(s)": kilogramFunctions.kilogramsToOunces
  },
  "ton(s)": {
    "gram(s)": tonsFunctions.tonsToGrams,
    "kilogram(s)": tonsFunctions.tonsToKilograms,
    "pound(s)": tonsFunctions.tonsToPounds,
    "ounce(s)": tonsFunctions.tonsToOunces
  },
  "pound(s)": {
    "gram(s)": poundFunctions.poundsToGrams,
    "kilogram(s)": poundFunctions.poundsToKilograms,
    "ton(s)": poundFunctions.poundsToTons,
    "ounce(s)": poundFunctions.poundsToOunces
  },
  "ounce(s)": {
    "gram(s)": ouncesFunctions.ouncesToGrams,
    "kilogram(s)": ouncesFunctions.ouncesToKilograms,
    "ton(s)": ouncesFunctions.ouncesToTons,
    "pound(s)": ouncesFunctions.ouncesToPounds
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
