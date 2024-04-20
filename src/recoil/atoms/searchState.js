import { atom } from "recoil";

export const regionInputState = atom({
    key: "regionInputState",
    default: {
        region: {
            province: "",
            district: "",
        },
    },
});

export const dateInputState = atom({
    key: "dateInputState",
    default: "",
});
