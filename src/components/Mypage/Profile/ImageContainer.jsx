import { useState, useRef } from "react";
import styled from "@emotion/styled";
import profile from "../../../assets/profile.png";
import { colors } from "../../../styles/colors";
import { updateProfileImg } from "../../../api/api";

const ImageContainer = () => {
  const [image, setImage] = useState(profile);
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);

  const handleEdit = () => {
    fileInput.current.click();
  };

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      return null;
    }
    const formData = new FormData();
    formData.append("profileImage", selectedFile);
    try {
      await updateProfileImg(formData);
      console.log("성공");
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(selectedFile);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <InfoWrapper>
      <FileUploader
        accept=".png, .jpeg, .jpg"
        type="file"
        ref={fileInput}
        onChange={handleChange}
      />
      <InfoLabel>프로필 사진</InfoLabel>
      <ProfileImg src={image} alt="프로필이미지"></ProfileImg>
      <EditBtn onClick={handleEdit}>사진 변경</EditBtn>
    </InfoWrapper>
  );
};

export default ImageContainer;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${colors.gray30};
  border-radius: 50%;
  margin-left: 120px;
`; //추후 img로 변경

const InfoWrapper = styled.div`
  display: flex;
  padding: 40px;
  border-bottom: 1px solid ${colors.gray10};
  align-items: center;
`;

const InfoLabel = styled.p`
  width: 80px;
`;

const EditBtn = styled.button`
  all: unset;
  color: ${colors.white};
  height: fit-content;
  margin-left: auto;
  width: 100px;
  text-align: center;
  padding: 6px 2px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${colors.black};
  &:hover {
    background-color: ${colors.gray30};
  }
`;

const SubmitBtn = styled(EditBtn)`
  background-color: ${colors.point02};
  color: white;
  border: none;
  &:hover {
    background-color: ${colors.point01};
  }
`;

const FileUploader = styled.input`
  display: none;
`;
