// 숙소 사진 입력 및 미리보기
import styled from "styled-components";
import { RiImageAddFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { registrationImage } from "../../recoil/atoms/registrationUserState";
import { colors } from "../../styles/colors";
import { IoClose } from "react-icons/io5";

const RoomInfo = () => {
  const [registrationImageState, setRegistrationImageState] =
    useRecoilState(registrationImage);
  const handleFileUpload = (e) => {
    if (registrationImageState.images.length >= 9) {
      alert("추가할 수 있는 사진의 갯수가 초과되었습니다.");
      return;
    }
    const file = e.target.files[0];
    if (file) {
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
    }
  };

  // Base64 문자열을 Blob 객체로 변환하는 함수
  const base64StringToBlob = (base64String) => {
    const byteString = atob(base64String.split(",")[1]);
    const mimeString = base64String.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  const handleFileDelete = (idx) => {
    setRegistrationImageState((prev) => {
      const updatedImages = prev.images.filter((_, index) => index !== idx);
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
        <Label htmlFor="photo_id">
          <RiImageAddFill color="#8DB161" size={50} />
        </Label>
        <Input
          accept=".png, .jpeg, .jpg"
          type="file"
          id="photo_id"
          onChange={handleFileUpload}
        ></Input>
        {registrationImageState.images?.map((img, idx) => (
          <ImgBox key={idx}>
            <Button type="button" onClick={() => handleFileDelete(idx)}>
              <IoClose color="#FFFFFF" />
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
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding-bottom: 20px;
`;
const Gallery = styled.div`
  border: 3px dotted #8db161;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.label`
  cursor: pointer;
  background-position: center;
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.hover01};
  border-radius: 10px;
  &:hover {
    background-color: ${colors.point03};
  }
`;
const ImgBox = styled.div`
  width: 7rem;
  height: 7rem;
  position: relative;
`;
const Img = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  border: ${(props) => (props.count === 0 ? "3px solid  #a2de56" : "")};
  border-radius: 10px;
`;
const Button = styled.button`
  all: unset;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 15px;
  height: 15px;
  background-color: ${colors.point01};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
