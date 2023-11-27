export type Year = number;

export interface YearItem {
  value: Year;
  label: string;
}

export interface YearList extends Array<YearItem> {}
