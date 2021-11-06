// Modules
import { Route, Switch, Redirect } from "react-router";
// Style
import style from "./App.module.css";
// Components
import Header from "./Components/Header/index";
// Pages
import Home from "./Pages/Home/index";
import Category from "./Pages/Category";
import Post from "./Pages/Post/index";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className={style.App}>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/category">
          <Category />
        </Route>

        <Route path="/post">
          <Post />
        </Route>

        <Route path="/not-found">
          <NotFound />
        </Route>

        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
