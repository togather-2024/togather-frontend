import { atom } from "recoil";

export const loginState = atom({
    key: "loginState",
    default: false,
});

export const dropDownState = atom({
    key: "dropDownState",
    default: false,
});
