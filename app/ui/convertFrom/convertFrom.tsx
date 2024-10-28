import { Dropdown } from "./dropdown";
import { useList } from "@/app/globalState/stateProvider";
import { Form } from "./form";

export const ConvertFrom = () => {
  const { baseUnit } = useList();
  return (
    <section>
      <Dropdown />

      {baseUnit && <Form />}
    </section>
  );
};
