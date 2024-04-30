import { atom } from "recoil";

export const registrationUserState = atom({
    key: "registrationUserState",
    default: {
        partyRoomName: undefined, //완료
        partyRoomDesc: undefined, //완료
        openingHour: undefined,
        closingHour: undefined,
        price: undefined,
        guestCapacity: undefined,
        customTags: [],
        sido: "", //완료
        sigungu: "", //완료
        roadName: "", //완료
        roadAddress: "", //완료
        jibunAddress: "",
        detailAddress: "",
        operationDays: [],
    },
});

export const registrationImage = atom({
    key: "registrationMainImage",
    default: {
        mainImage: "",
        subImages: [],
        images: [],
    },
});
