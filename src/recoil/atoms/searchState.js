import { atom } from "recoil";

export const regionInputState = atom({
    key: "regionInputState",
    default: {
        region: {
            province: undefined,
            district: undefined,
        },
    },
});

export const dateInputState = atom({
    key: "dateInputState",
    default: undefined,
});
