import { distanceMap } from "./distance";
import { temperatureMap } from "./temperature";
import { weightMap } from "./weight";
import { UnitsMatchMapType } from "../types/types";

export const UnitsMatchMap: UnitsMatchMapType = {
    ...distanceMap,
    ...weightMap,
    ...temperatureMap
}