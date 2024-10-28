"use client";

import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from "react";

interface Context {
  baseUnitSelected: boolean;
  setBaseUnitSelected: Dispatch<SetStateAction<boolean>>;
  baseUnit: string;
  setBaseUnit: Dispatch<SetStateAction<string>>;
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
  const [baseUnitSelected, setBaseUnitSelected] = useState(false);
  const [baseUnit, setBaseUnit] = useState("");

  const stateObj = {
    baseUnitSelected,
    setBaseUnitSelected,
    baseUnit,
    setBaseUnit
  };

  return (
    <myContext.Provider value={stateObj}>{children}</myContext.Provider>
  );
};
