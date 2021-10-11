import { Callback } from "../alias/callback";

interface EventPropsArray {
  [key: string]: Callback[]
}
interface EventProps {
  [key: string]: Callback
}

export {
  EventPropsArray,
  EventProps,
}