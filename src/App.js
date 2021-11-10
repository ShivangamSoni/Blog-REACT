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
// Context
import { DataProvider } from "./DataContext";

function App() {
  return (
    <div className={style.App}>
      <DataProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/category/:category" element={<Category />} />

          <Route path="/post/:author/:post" element={<Post />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
