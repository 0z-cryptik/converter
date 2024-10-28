import { unitsMatchAndConvertMap } from "./unitsMatchCalculationMap";

export const calculate = (
  baseUnit: string,
  baseUnitAmount: number,
  resultingUnit: string
): string | undefined => {
  const unitConversion =
    unitsMatchAndConvertMap[baseUnit]?.[resultingUnit];
  return unitConversion ? unitConversion(baseUnitAmount) : undefined;
};
