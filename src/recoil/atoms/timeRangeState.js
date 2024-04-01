import { atom } from "recoil";
export const timeRangeState = atom({
  key: "timeRangeState",
  default: { start: null, end: null },
});
