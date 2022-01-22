// Modules
import { Route, Routes, Navigate } from "react-router-dom";
// Style
import style from "./App.module.css";
// Components
import Header from "./Components/Header/index";
// Pages
import Home from "./Pages/Home/index";
import Category from "./Pages/Category";
import Post from "./Pages/Post/index";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/Signin";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
// import Write from "./Pages/Write";
// Utilities
import AuthRoute from "./Routes/AuthRoute";
import UnAuthRoute from "./Routes/UnAuthRoute";
import ScrollToTop from "./Utilities/ScrollToTop";

// REDUX
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "./REDUX/Blogs/ActionCreator";
import useMediaQuery from "./Utilities/useMediaQuery";
import Notification from "./Components/Notification";
import { setMediaMatch, verifyToken } from "./REDUX/Site/ActionCreator";

function App() {
  const mediaQuerySize = "(max-width: 770px)";
  const mediaMatches = useMediaQuery(mediaQuerySize);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());

    const token = localStorage.getItem("token");
    if (token) {
      dispatch(verifyToken());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(setMediaMatch(mediaMatches));
  }, [dispatch, mediaMatches]);

  return (
    <div className={style.App}>
      <ScrollToTop />
      <Notification />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/category/:category" element={<Category />} />

        <Route path="/post/:id" element={<Post />} />

        <Route
          path="/signin"
          element={
            <UnAuthRoute>
              <SignIn />
            </UnAuthRoute>
          }
        />

        <Route
          path="/register"
          element={
            <UnAuthRoute>
              <Register />
            </UnAuthRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <AuthRoute>
              <Profile />
            </AuthRoute>
          }
        />

        <Route path="/profile/:authorId" element={<Profile />} />

        {/* <Route
          path="/write"
          element={
            <AuthRoute>
              <Write />
            </AuthRoute>
          }
        /> */}

        <Route path="/not-found" element={<NotFound />} />

        <Route path="/*" element={<Navigate to="/not-found" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;
