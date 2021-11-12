// Modules
import { Route, Routes } from "react-router-dom";
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
import UserProfile from "./Pages/UserProfile";
import Write from "./Pages/Write";
// Context
import { DataProvider } from "./DataContext";
// Utilities
import AuthRoute from "./Routes/AuthRoute";
import UnAuthRoute from "./Routes/UnAuthRoute";
import ScrollToTop from "./Utilities/ScrollToTop";

function App() {
  return (
    <div className={style.App}>
      <ScrollToTop />

      <DataProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/category/:category" element={<Category />} />

          <Route path="/post/:author/:post" element={<Post />} />

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
                <UserProfile />
              </AuthRoute>
            }
          />

          <Route
            path="/write"
            element={
              <AuthRoute>
                <Write />
              </AuthRoute>
            }
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <AuthRoute path="/profile" element={<UserProfile />} /> */}
      </DataProvider>
    </div>
  );
}

export default App;
