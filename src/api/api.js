import axios from "axios";

const token = localStorage.getItem("refresh_token");

export const addBookmark = async (roomId) => {
  return await axios.post(`/partyroom/bookmark/${Number(roomId)}`, "", {
    headers: {
      Authorization: token,
    },
  });
};

export const deleteBookmark = async (roomId) => {
  return await axios.delete(`/partyroom/bookmark/${Number(roomId)}`, {
    headers: {
      Authorization: token,
    },
  });
};
