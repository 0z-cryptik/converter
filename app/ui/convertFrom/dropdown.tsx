import { units } from "../../libs/units";
import { useList } from "../../globalState/stateProvider";

export const Dropdown = () => {
  const {
    setBaseUnit,
    setBaseUnitAmount,
    setFinalresult,
    setResultingUnit,
    setVal
  } = useList();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBaseUnit(e.target.value);
    setVal("");
    setBaseUnitAmount(0);
    setFinalresult("");
    setResultingUnit("");
  };

  return (
    <div className="mt-7">
      <label htmlFor="convertFrom">Convert from:</label>
      <select
        id="convertFrom"
        defaultValue=""
        onChange={handleSelect}>
        <option
          value=""
          disabled
          hidden>
          Select a unit
        </option>
        {units.map((unit, i) => {
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
