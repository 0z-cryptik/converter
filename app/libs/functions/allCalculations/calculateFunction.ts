import { UnitsMatchMap } from "../../maps/allUnits";

export const calculate = (
  baseUnit: string,
  baseUnitAmount: number,
  resultingUnit: string
): string | undefined => {
  const unitConversion = UnitsMatchMap[baseUnit]?.[resultingUnit];
  return unitConversion ? unitConversion(baseUnitAmount) : undefined;
};
