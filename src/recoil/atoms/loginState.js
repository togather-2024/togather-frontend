import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "sessionStorage",
    storage: sessionStorage,
});

export const loginState = atom({
    key: "loginState",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const dropDownState = atom({
    key: "dropDownState",
    default: false,
});
