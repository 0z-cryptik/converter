import { ConvertFrom } from "./convertFrom/convertFrom";
import { ConvertTo } from "./convertTo/convertT0";
import { Header } from "./header";
import { useList } from "../globalState/stateProvider";
import { calculate } from "../libs/functions/allCalculations/calculateFunction";

export const App = () => {
  const {
    baseUnit,
    baseUnitAmount,
    resultingUnit,
    finalResult,
    setFinalresult
  } = useList();

  let result: string | undefined;

  result = calculate(baseUnit, baseUnitAmount, resultingUnit);

  if (result) {
    setFinalresult(result);
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <Header />
      <div className="border p-[20px] mt-7">
        <ConvertFrom />
        {baseUnit && baseUnitAmount !== 0 && <ConvertTo />}
        {finalResult !== "" && (
          <p className="text-lg mt-5">Answer = {finalResult}</p>
        )}
      </div>
    </section>
  );
};
