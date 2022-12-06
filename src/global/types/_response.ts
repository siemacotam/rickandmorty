import { statusses } from "../const";
import { Character } from "./_character";

export type Values<T> = T[keyof T];

export interface Response {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type Status = Values<typeof statusses>;
