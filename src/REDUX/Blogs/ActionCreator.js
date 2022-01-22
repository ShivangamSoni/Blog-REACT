import axios from "axios";
import ACTION_TYPES from "./ActionTypes";
import { logout, sessionExpired } from "../Site/ActionCreator";
import BASE_URL from "../../Utilities/API";

export const fetchBlogs = () => {
  return async (dispatch) => {
    const url = `${BASE_URL}/api/v1/blogs`;
    try {
      const {
        data: {
          data: { blogs },
        },
      } = await axios.get(url);

      if (Array.isArray(blogs)) {
        dispatch({ type: ACTION_TYPES.STORE_ALL_BLOGS, payload: { blogs } });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchBlogByCategory = (category) => {
  return async (dispatch) => {
    const url = `${BASE_URL}/api/v1/blogs/category/${category}`;

    try {
      const {
        data: {
          data: { blogs: categoryBlogs },
        },
      } = await axios.get(url);

      if (Array.isArray(categoryBlogs)) {
        dispatch({ type: ACTION_TYPES.STORE_CATEGORY_BLOGS, payload: { categoryBlogs } });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchBlogById = (id) => {
  return async (dispatch) => {
    const url = `${BASE_URL}/api/v1/blogs/${id}`;

    try {
      const {
        data: {
          data: { blog },
        },
      } = await axios.get(url);

      dispatch({ type: ACTION_TYPES.STORE_ACTIVE_BLOG, payload: { blog } });
      dispatch(fetchUserById(blog.authorId));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchUserById = (id) => {
  return async (dispatch) => {
    const url = `${BASE_URL}/api/v1/user/${id}`;

    try {
      const {
        data: { data: user },
      } = await axios.get(url);

      user.id = id;

      dispatch({ type: ACTION_TYPES.STORE_ACTIVE_AUTHOR, payload: { user } });
      dispatch(fetchLatestByUserId(id));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchLoggedInUser = () => {
  return async (dispatch) => {
    const url = `${BASE_URL}/api/v1/user/`;
    const token = localStorage.getItem("token");

    try {
      const {
        data: { data: user },
      } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: ACTION_TYPES.STORE_ACTIVE_AUTHOR, payload: { user } });
      dispatch(fetchLatestByUser());
    } catch (e) {
      dispatch(logout());
      dispatch(sessionExpired());
    }
  };
};

export const fetchLatestByUserId = (id) => {
  return async (dispatch) => {
    const url = `${BASE_URL}/api/v1/blogs/latest/${id}`;

    try {
      const {
        data: { data: latestByUser },
      } = await axios.get(url);

      dispatch({ type: ACTION_TYPES.STORE_LATEST_BY_USER, payload: { latestByUser } });
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchLatestByUser = () => {
  return async (dispatch) => {
    const url = `${BASE_URL}/api/v1/blogs/latest/`;
    const token = localStorage.getItem("token");

    try {
      const {
        data: { data: latestByUser },
      } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: ACTION_TYPES.STORE_LATEST_BY_USER, payload: { latestByUser } });
    } catch (e) {
      dispatch(logout());
      dispatch(sessionExpired());
    }
  };
};
