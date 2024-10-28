import { ConvertFrom } from "./convertFrom/convertFrom";
import { ConvertTo } from "./convertTo/convertT0";
import { Header } from "./header";
import { useList } from "../globalState/stateProvider";

export const App = () => {
  const { baseUnit, baseUnitAmount } = useList();

  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <ConvertFrom />
      {baseUnit && baseUnitAmount !== 0 && <ConvertTo />}
    </section>
  );
};
