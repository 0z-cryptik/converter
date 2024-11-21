import {
  distanceUnits,
  temperatureUnits,
  weightUnits
} from "../../libs/units";

import { useList } from "../../globalState/stateProvider";

export const ConvertTo = () => {
  const { setResultingUnit, baseUnit } = useList();

  let matchingUnit: string[];

  if (distanceUnits.includes(baseUnit)) {
    matchingUnit = distanceUnits.filter((item) => item !== baseUnit);
  } else if (temperatureUnits.includes(baseUnit)) {
    matchingUnit = temperatureUnits.filter((item) => item !== baseUnit);
  } else {
    matchingUnit = weightUnits.filter((item) => item !== baseUnit);
  }

  return (
    <div className="mt-7">
      <label htmlFor="convertFrom">Convert to:</label>
      <select
        id="convertFrom"
        defaultValue=""
        className="outline-none bg-blue-500 ml-2"
        onChange={(e) => {
          setResultingUnit(e.target.value);
        }}>
        <option
          value=""
          disabled
          hidden>
          Select a unit
        </option>
        {matchingUnit.map((unit, i) => {
          return (
            <option
              key={i}
              value={unit}>
              {unit}
            </option>
          );
        })}
      </select>
    </div>
  );
};
