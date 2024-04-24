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
  return await axios.delete(`/api/review/delete/${reviewId}`, {
    headers: {
      Authorization: token,
    },
  });
};

export const getUserInfo = async ({ token }) => {
  return await axios.post(`/api/member/getUserInfo`, "", {
    headers: {
      Authorization: token,
    },
  });
};

export const updateName = async (data) => {
  return await axios.patch(`/api/member/update/name?name=${data}`, "", {
    headers: { Authorization: token },
  });
};

export const updateProfileImg = async (formData) => {
  return await axios.patch(`/api/member/update/profileImage`, formData, {
    headers: { Authorization: token, "Content-Type": "multipart/form-data" },
  });
};

export const updatePassword = async (requestBody) => {
  return await axios.patch(`/api/member/update/password`, requestBody, {
    headers: {
      Authorization: token,
    },
  });
};

export const deleteAccount = async (requestBody) => {
  return await axios.delete(`/api/member/withdrawal`, {
    headers: {
      Authorization: token,
    },
    data: requestBody,
  });
};
