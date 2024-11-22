type ConversionFunction = (amount: number) => string;
export type UnitsMatchMapType = Record<string, Record<string, ConversionFunction>>