import * as feetsFunction from "@/app/libs/functions/distance/feets";
import * as kilometersFunctions from "@/app/libs/functions/distance/kilometers";
import * as metersFunctions from "@/app/libs/functions/distance/meters";
import * as milesFunctions from "@/app/libs/functions/distance/miles";
import * as squareMilesFunctions from "@/app/libs/functions/distance/squaremiles";
import * as squareKilometerFunctions from "@/app/libs/functions/distance/squarekilometers";
import * as yardsFunctions from "@/app/libs/functions/distance/yards";
import { UnitsMatchMapType } from "../types/types";

export const distanceMap: UnitsMatchMapType = {
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
