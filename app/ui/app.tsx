import { ConvertFrom } from "./convertFrom/convertFrom";
import { ConvertTo } from "./convertTo/convertT0";
import { Header } from "./header";
import { useList } from "../globalState/stateProvider";
import { calculate } from "../libs/functions/allCalculations/calculateFunction";
import { ubuntuMono } from "./fonts";
import { Answer } from "./answer";

export const App = () => {
  const {
    baseUnit,
    baseUnitAmount,
    resultingUnit,
    finalResult,
    setFinalresult
  } = useList();

  const result: string | undefined = calculate(
    baseUnit,
    baseUnitAmount,
    resultingUnit
  );

  if (result) {
    setFinalresult(result);
  }

  return (
    <section
      className={`${ubuntuMono.className} flex flex-col items-center justify-center h-screen bg-black text-white text-xl`}>
      <Header />
      <div className="border p-[20px] mt-7">
        <ConvertFrom />
        {baseUnit && baseUnitAmount !== 0 && <ConvertTo />}
        {finalResult !== "" && <Answer />}
      </div>
    </section>
  );
};
