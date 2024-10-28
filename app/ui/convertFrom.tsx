import { units } from "../libs/units";

export const ConvertFrom = () => {
  return (
    <div className="mt-7">
      <label htmlFor="convertFrom">Convert from:</label>
      <select id="convertFrom">
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
