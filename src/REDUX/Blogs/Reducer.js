import ACTION_TYPES from "./ActionTypes";

const defaultState = { blogs: [], categoryBlogs: [], active: { blog: {}, user: {}, latestByUser: [] } };

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.STORE_ALL_BLOGS:
      const { blogs } = payload;
      return { ...state, blogs: blogs };
    case ACTION_TYPES.STORE_CATEGORY_BLOGS:
      const { categoryBlogs } = payload;
      return { ...state, categoryBlogs };
    case ACTION_TYPES.STORE_ACTIVE_BLOG:
      const { blog } = payload;
      return { ...state, active: { ...state.active, blog } };
    case ACTION_TYPES.STORE_ACTIVE_AUTHOR:
      const { user } = payload;
      return { ...state, active: { ...state.active, user } };
    case ACTION_TYPES.STORE_LATEST_BY_USER:
      const { latestByUser } = payload;
      return { ...state, active: { ...state.active, latestByUser } };
    default:
      return state;
  }
};

export default reducer;
