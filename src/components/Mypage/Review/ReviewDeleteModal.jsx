import styled from "@emotion/styled";
import ModalContainer from "../../Common/ModalContainer";
import { deleteReview } from "../../../api/api";
import { colors } from "../../../styles/colors";

const ReviewDeleteModal = ({ setIsOpen, reviewId, setReview, review }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteReview(reviewId);
      setIsOpen(false);
      alert("리뷰가 삭제되었습니다.");
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <ModalContainer>
      <ConfirmText>작성하신 리뷰를 삭제하시겠습니까?</ConfirmText>
      <BtnWrapper>
        <YesBtn onClick={handleDelete}>확인</YesBtn>
        <NoBtn onClick={handleClose}>취소</NoBtn>
      </BtnWrapper>
    </ModalContainer>
  );
};

export default ReviewDeleteModal;

const ConfirmText = styled.p``;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const YesBtn = styled.button`
  all: unset;
  text-align: center;
  flex: 1;
  background-color: ${colors.point01};
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  color: ${colors.white};
  &:disabled {
    background-color: ${colors.gray30};
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${colors.hover01};
  }
`;

const NoBtn = styled(YesBtn)`
  background: none;
  border: 1px solid ${colors.dark};
  color: ${colors.dark};
  &:hover {
    background-color: ${colors.gray10};
  }
`;
