import axios from "axios";
import BASE_URL from "../../Utilities/API";
import ACTION_TYPES from "./ActionTypes";

export const sessionExpired = () => {
  const notification = { show: true, text: "Session Expired!! Login Again" };
  return { type: ACTION_TYPES.SET_NOTIFICATION, payload: { notification } };
};

export const loginToVote = () => {
  const notification = { show: true, text: "Please Login to Clap for Post" };
  return { type: ACTION_TYPES.SET_NOTIFICATION, payload: { notification } };
};

export const hideNotification = () => {
  const notification = { show: false, text: "" };
  return { type: ACTION_TYPES.SET_NOTIFICATION, payload: { notification } };
};

export const setMediaMatch = (mediaMatches) => ({ type: ACTION_TYPES.SET_MEDIA, payload: mediaMatches });

export const verifyToken = () => {
  return async (dispatch) => {
    const url = `${BASE_URL}/api/v1/user/verify/token`;
    const token = localStorage.getItem("token");

    try {
      await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
      dispatch(login());
    } catch (e) {
      dispatch(sessionExpired());
      dispatch(logout());
    }
  };
};

export const login = () => ({ type: ACTION_TYPES.SET_AUTH, payload: true });

export const logout = () => {
  localStorage.removeItem("token");
  return { type: ACTION_TYPES.SET_AUTH, payload: false };
};
