import { Callback } from "../alias/callback";

export interface Event {
  [key: string]: Callback[]
}