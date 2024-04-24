import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({ key: "profileInfo" });

export const profileInfoState = atom({
  key: "profileInfoState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
