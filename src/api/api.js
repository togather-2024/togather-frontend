import axios from "axios";

const token = localStorage.getItem("refresh_token");

//bookmark
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

//review
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

//user

export const getUserInfo = async (tokenProps) => {
  if (tokenProps) {
    return await axios.post(`/api/member/getUserInfo`, "", {
      headers: {
        Authorization: tokenProps,
      },
    });
  } else {
    return await axios.post(`/api/member/getUserInfo`, "", {
      headers: { Authorization: token },
    });
  }
};

export const updateName = async (data) => {
  return await axios.patch(`/api/member/update/name?name=${data}`, "", {
    headers: { Authorization: token },
  });
};

export const updateProfileImg = async (formData) => {
  return await axios.patch(`/api/member/update/profileImage`, formData, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
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

export const switchRole = async (memberSrl) => {
  return await axios.post(`/api/member/switch-role/${memberSrl}`, "", {
    headers: { Authorization: token },
  });
};

//payment
export const paymentRequestToServer = async (requestBody) => {
  return await axios.post(`/payment/toss`, requestBody, {
    headers: { Authorization: token },
  });
};

export const cancelPayment = async (paymentKey, requestBody) => {
  return await axios.post(`/payment/toss/cancel/${paymentKey}`, requestBody, {
    headers: { Authorization: token },
  });
};

export const reservatePartyroom = async (requestBody) => {
  return await axios.post(`/partyroom/reservation/registration`, requestBody, {
    headers: { Authorization: token },
  });
};
