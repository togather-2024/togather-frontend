import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { FaHeart } from "react-icons/fa";
import { addBookmark, deleteBookmark } from "../../../api/api";
import { colors } from "../../../styles/colors";

const HeartContainer = ({ data }) => {
  const { bookmarked } = data;
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const { roomId } = useParams();
  const handleBookmark = async () => {
    try {
      await addBookmark(roomId);
      setIsBookmarked(true);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("로그인 후 이용이 가능합니다.");
      } else {
        console.error(error);
      }
    }
  };

  const handleDeleteBookmark = async () => {
    try {
      await deleteBookmark(roomId);
      setIsBookmarked(false);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("로그인 후 이용이 가능합니다.");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Container>
      {isBookmarked && bookmarked ? (
        <FaHeart size="15" color="#ff5353" onClick={handleDeleteBookmark} />
      ) : (
        <FaHeart size="15" color="#c6c6c6" onClick={handleBookmark} />
      )}
    </Container>
  );
};

export default HeartContainer;

const Container = styled.div`
  border-radius: 50%;
  border: 1px solid ${colors.point04};
  padding: 10px;
  /* position: absolute; */
  right: 0;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  margin-right: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 10px 3px rgba(189, 239, 123, 0.5);
`;
