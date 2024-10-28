type ConversionFunction = (amount: number) => string;
export type UnitsMatchAndConvertMapType = Record<string, Record<string, ConversionFunction>>