// 숙소 사진 입력 및 미리보기
import styled from "styled-components";
import cameraAddImg from "../../assets/camera-add-svgrepo-com.svg";
import { useRecoilState } from "recoil";
import { registrationImage } from "../../recoil/atoms/registrationUserState";

const RoomInfo = () => {
    const [registrationImageState, setRegistrationImageState] =
        useRecoilState(registrationImage);
    const handleFileUpload = (e) => {
        if (registrationImageState.images.length >= 9) {
            alert("추가할 수 있는 사진의 갯수가 초과되었습니다.");
            return;
        }
        const file = e.target.files[0];

        const fileRead = new FileReader();
        fileRead.readAsDataURL(file);
        fileRead.onload = () => {
            const base64String = fileRead.result;
            // Base64 문자열을 Blob 객체로 변환
            const blob = base64StringToBlob(base64String);

            setRegistrationImageState((prev) => {
                if (!prev.images || prev.images.length === 0) {
                    return {
                        ...prev,
                        mainImage: blob,
                        images: [base64String],
                    };
                } else {
                    return {
                        ...prev,
                        subImages: [...prev.subImages, blob],
                        images: [...prev.images, base64String],
                    };
                }
            });
        };
    };

    // Base64 문자열을 Blob 객체로 변환하는 함수
    const base64StringToBlob = (base64String) => {
        const byteString = atob(base64String.split(",")[1]);
        const mimeString = base64String
            .split(",")[0]
            .split(":")[1]
            .split(";")[0];

        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ab], { type: mimeString });
    };

    const handleFileDelete = (idx) => {
        setRegistrationImageState((prev) => {
            const updatedImages = prev.images.filter(
                (_, index) => index !== idx
            );
            const updatedMainImage =
                idx === 0 ? prev.images[1] || "" : prev.mainImage;
            const updatedSubImages =
                idx === 0 ? prev.subImages.slice(1) : prev.subImages;
            return {
                ...prev,
                mainImage: updatedMainImage,
                subImages: updatedSubImages,
                images: updatedImages,
            };
        });
    };
    return (
        <ContentsBox>
            <Gallery>
                <Label htmlFor="photo_id" />
                <Input
                    accept=".png, .jpeg, .jpg"
                    type="file"
                    id="photo_id"
                    onChange={handleFileUpload}
                ></Input>
                {registrationImageState.images?.map((img, idx) => (
                    <ImgBox key={idx}>
                        <Button
                            type="button"
                            onClick={() => handleFileDelete(idx)}
                        >
                            X
                        </Button>
                        <Img src={img} count={idx} />
                    </ImgBox>
                ))}
            </Gallery>
        </ContentsBox>
    );
};

export default RoomInfo;

const ContentsBox = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Gallery = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.5rem;
`;
const Input = styled.input`
    display: none;
`;
const Label = styled.label`
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 7rem;
    height: 7rem;
    background: url(${cameraAddImg});
    background-size: cover;
    cursor: pointer;
    background-position: center;
    border-radius: 10px;
    margin: 0.5rem;
`;
const ImgBox = styled.div`
    width: 7rem;
    height: 7rem;

    margin: 0.5rem;
    position: relative;
`;
const Img = styled.img`
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border: ${(props) =>
        props.count === 0 ? "3px solid black" : "1px solid rgba(0,0,0,0.5)"};
    border-radius: 10px;
`;
const Button = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    border: 1px solid black;
    width: 15px;
    height: 15px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
`;
