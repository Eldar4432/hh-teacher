export type Ws = number;

export interface WsItem {
  value: Ws;
  label: string;
}

export interface WsList extends Array<WsItem> {}
