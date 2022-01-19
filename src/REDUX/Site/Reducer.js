import ACTION_TYPES from "./ActionTypes";

const defaultState = { mediaMatches: false, isAuthenticated: false, notification: { show: false, text: "" } };

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_MEDIA:
      return { ...state, mediaMatches: payload };
    case ACTION_TYPES.SET_AUTH:
      return { ...state, isAuthenticated: payload };
    case ACTION_TYPES.SET_NOTIFICATION:
      const { notification } = payload;
      return { ...state, notification };
    default:
      return state;
  }
};

export default reducer;
