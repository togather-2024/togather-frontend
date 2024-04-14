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
        sido: undefined, //완료
        sigungu: undefined, //완료
        roadName: undefined, //완료
        roadAddress: undefined, //완료
        jibunAddress: undefined,
        detailAddress: undefined,
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
