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

export const getBookmarkList = async () => {
  return await axios.get(`/partyroom/bookmark`, {
    headers: {
      Authorization: token,
    },
  });
};

export const editReview = async (params, reviewId) => {
  return await axios.post(`/api/review/modify/${reviewId}`, "", {
    headers: {
      Authorization: token,
    },
    params: params,
  });
};

export const deleteReview = async (reviewId) => {
  return await axios.delete(`api/review/delete/${reviewId}`, {
    headers: {
      Authorization: token,
    },
  });
};
