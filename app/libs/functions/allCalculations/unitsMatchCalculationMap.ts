// length related imports
import * as feetsFunction from "@/app/libs/functions/distance/feets";
import * as kilometersFunctions from "@/app/libs/functions/distance/kilometers";
import * as metersFunctions from "@/app/libs/functions/distance/meters";
import * as milesFunctions from "@/app/libs/functions/distance/miles";
import * as squareMilesFunctions from "@/app/libs/functions/distance/squaremiles";
import * as squareKilometerFunctions from "@/app/libs/functions/distance/squarekilometers";
import * as yardsFunctions from "@/app/libs/functions/distance/yards";

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
    "kilometer(s)": milesFunctions.milesToKilometers,
    "yard(s)": milesFunctions.milesToYards,
    "meter(s)": milesFunctions.milesToMeters,
    "feet(s)": milesFunctions.milesToFeet,
    "square mile(s)": milesFunctions.milesToSquareMiles,
    "square kilometer(s)": milesFunctions.milesToSquareKilometers
  },
  "kilometer(s)": {
    "mile(s)": kilometersFunctions.kilometersToMiles,
    "yard(s)": kilometersFunctions.kilometersToYards,
    "meter(s)": kilometersFunctions.kilometersToMeters,
    "feet(s)": kilometersFunctions.kilometersToFeet,
    "square mile(s)": kilometersFunctions.kilometersToSquareMiles,
    "square kilometer(s)": kilometersFunctions.kilometersToSquareKilometers
  },
  "yard(s)": {
    "mile(s)": yardsFunctions.yardsToMiles,
    "kilometer(s)": yardsFunctions.yardsToKilometers,
    "meter(s)": yardsFunctions.yardsToMeters,
    "feet(s)": yardsFunctions.yardsToFeet,
    "square mile(s)": yardsFunctions.yardsToSquareMiles,
    "square kilometer(s)": yardsFunctions.yardsToSquareKilometers
  },
  "meter(s)": {
    "mile(s)": metersFunctions.metersToMiles,
    "kilometer(s)": metersFunctions.metersToKilometers,
    "yard(s)": metersFunctions.metersToYards,
    "feet(s)": metersFunctions.metersToFeet,
    "square mile(s)": metersFunctions.metersToSquareMiles,
    "square kilometer(s)": metersFunctions.metersToSquareKilometers
  },
  "feet(s)": {
    "mile(s)": feetsFunction.feetToMiles,
    "kilometer(s)": feetsFunction.feetToKilometers,
    "yard(s)": feetsFunction.feetToYards,
    "meter(s)": feetsFunction.feetToMeters,
    "square mile(s)": feetsFunction.feetToSquareMiles,
    "square kilometer(s)": feetsFunction.feetToSquareKilometers
  },
  "square mile(s)": {
    "square kilometer(s)":
      squareMilesFunctions.squareMilesToSquareKilometers,
    "meter(s)": squareMilesFunctions.squareMilesToMeters,
    "kilometer(s)": squareMilesFunctions.squareMilesToKilometers,
    "yard(s)": squareMilesFunctions.squareMilesToYards,
    "mile(s)": squareMilesFunctions.squareMilesToMiles,
    "feet(s)": squareMilesFunctions.squareMilesToFeet
  },
  "square kilometer(s)": {
    "square mile(s)":
      squareKilometerFunctions.squareKilometersToSquareMiles,
    "meter(s)": squareKilometerFunctions.squareKilometersToMeters,
    "kilometer(s)": squareKilometerFunctions.squareKilometersToKilometers,
    "yard(s)": squareKilometerFunctions.squareKilometersToYards,
    "miles(s)": squareKilometerFunctions.squareKilometersToMiles,
    "feet(s)": squareKilometerFunctions.squareKilometersToFeet
  }
};
