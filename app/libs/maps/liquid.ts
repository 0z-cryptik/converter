import { UnitsMatchMapType } from "../types/types";
import * as pintsFunction from "@/app/libs/functions/liquid/pints";
import * as litersFunctions from "@/app/libs/functions/liquid/liters";
import * as centilitersFunctions from "@/app/libs/functions/liquid/centiliters";
import * as gallonsFunctions from "@/app/libs/functions/liquid/gallons";
import * as millitersFunctions from "@/app/libs/functions/liquid/milliliters";

export const liquidMap: UnitsMatchMapType = {
  "pint(s)": {
    "liter(s)": pintsFunction.pintsToLiters,
    "centiliter(s)": pintsFunction.pintsToCentiliters,
    "milliliter(s)": pintsFunction.pintsToMilliliters,
    "gallon(s)": pintsFunction.pintsToGallons
  },
  "liter(s)": {
    "pint(s)": litersFunctions.litersToPints,
    "centiliter(s)": litersFunctions.litersToCentiliters,
    "milliliter(s)": litersFunctions.litersToMilliliters,
    "gallon(s)": litersFunctions.litersToGallons
  },
  "centiliter(s)": {
    "pint(s)": centilitersFunctions.centilitersToPints,
    "liter(s)": centilitersFunctions.centilitersToLiters,
    "milliliter(s)": centilitersFunctions.centilitersToMilliliters,
    "gallon(s)": centilitersFunctions.centilitersToGallons
  },
  "gallon(s)": {
    "pint(s)": gallonsFunctions.gallonsToPints,
    "liter(s)": gallonsFunctions.gallonsToLiters,
    "milliliter(s)": gallonsFunctions.gallonsToMilliliters,
    "centiliter(s)": gallonsFunctions.gallonsToCentiliters
  },
  "milliliter(s)": {
    "pint(s)": millitersFunctions.millilitersToPints,
    "liter(s)": millitersFunctions.millilitersToLiters,
    "centiliter(s)": millitersFunctions.millilitersToCentiliters,
    "gallon(s)": millitersFunctions.millilitersToGallons
  }
};
