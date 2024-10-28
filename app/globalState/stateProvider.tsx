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
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
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
  const [amount, setAmount] = useState(0);

  const stateObj = {
    baseUnit,
    setBaseUnit,
    amount,
    setAmount
  };

  return (
    <myContext.Provider value={stateObj}>{children}</myContext.Provider>
  );
};
