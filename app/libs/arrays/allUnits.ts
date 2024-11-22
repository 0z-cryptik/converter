import { temperatureUnits } from "./temperature";
import { weightUnits } from "./weight";
import { distanceUnits } from "./distance";
import { liquidUnits } from "./liquid";


export const units: string[] = [
  ...temperatureUnits,
  ...weightUnits,
  ...distanceUnits,
  ...liquidUnits
];
