"use client";

import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from "react";

interface Context {
  baseUnit: string;
  setBaseUnit: Dispatch<SetStateAction<string>>;
  baseUnitAmount: number;
  setBaseUnitAmount: Dispatch<SetStateAction<number>>;
  resultingUnit: string;
  setResultingUnit: Dispatch<SetStateAction<string>>;
  finalResult: string;
  setFinalresult: Dispatch<SetStateAction<string>>;
  val: string;
  setVal: Dispatch<SetStateAction<string>>;
}

const myContext = createContext<Context | undefined>(undefined);

export const useList = () => {
  const context = useContext(myContext);

  if (!context) {
    throw new Error("must be used within a state provider");
  }

  return context;
};

interface GlobalState {
  children: React.ReactNode;
}

export const StateProvider: React.FC<GlobalState> = ({ children }) => {
  const [baseUnit, setBaseUnit] = useState("");
  const [baseUnitAmount, setBaseUnitAmount] = useState(0);
  const [resultingUnit, setResultingUnit] = useState("");
  const [finalResult, setFinalresult] = useState("");
  const [val, setVal] = useState("");

  const stateObj = {
    baseUnit,
    setBaseUnit,
    baseUnitAmount,
    setBaseUnitAmount,
    resultingUnit,
    setResultingUnit,
    finalResult,
    setFinalresult,
    val,
    setVal
  };

  return (
    <myContext.Provider value={stateObj}>{children}</myContext.Provider>
  );
};
