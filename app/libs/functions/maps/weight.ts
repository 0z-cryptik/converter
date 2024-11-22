import * as tonsFunctions from "@/app/libs/functions/weight/tons";
import * as kilogramFunctions from "@/app/libs/functions/weight/kilograms";
import * as gramFunctions from "@/app/libs/functions/weight/grams";
import * as poundFunctions from "@/app/libs/functions/weight/pounds";
import * as ouncesFunctions from "@/app/libs/functions/weight/ounces";
import { UnitsMatchMapType } from "../types/types";

export const weightMap: UnitsMatchMapType = {
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
  }
};
