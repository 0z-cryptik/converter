import { useList } from "@/app/globalState/stateProvider";
import { IoMdCheckbox } from "react-icons/io";
import { useState } from "react";

export const Form = () => {
  const { baseUnit, setBaseUnitAmount, val, setVal } = useList();

  return (
    <form className="mt-5 border flex flex-row">
      <input
        id="baseUnitAmount"
        placeholder={`how many ${baseUnit}?`}
        type="number"
        className="w-full outline-none py-2 pl-2 bg-transparent"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setBaseUnitAmount(Number(val));
        }}
        className={`${val === "" && "hidden"}`}>
        <IoMdCheckbox
          color="green"
          size={"1.5rem"}
        />
      </button>
    </form>
  );
};
