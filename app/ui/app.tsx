import { ConvertFrom } from "./convertFrom/convertFrom";
import { Header } from "./header";

export const App = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <ConvertFrom />
    </section>
  );
};
