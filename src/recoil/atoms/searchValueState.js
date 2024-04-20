import { atom } from "recoil";

export const searchValueState = atom({
    key: "mainPageState",
    default: {
        sido: "",
        sigungu: "",
        date: "",
        guestCount: 0,
        keywords: [],
    },
});
