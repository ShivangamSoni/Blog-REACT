import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.css";
import Navbar from "../Navbar/index";
import { DataContext } from "../../DataContext";

const Header = () => {
  const [navActive, setNavActive] = useState(true);
  const { mediaMatches } = useContext(DataContext);

  const { pathname } = useLocation();
  const isPostPage = pathname.includes("/post");

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    if (isPostPage) {
      setNavActive(true);
    } else {
      setNavActive(!mediaMatches);
    }
  }, [mediaMatches, isPostPage]);

  return (
    <header className={`${style.header} ${isPostPage ? style.postPageHeader : ""}`}>
      <div>
        <Link to="/" className={style.brandLink}>
          <h1 className={style.brand}>
            <span>The</span> Siren
          </h1>
        </Link>
        {mediaMatches && !isPostPage ? <span onClick={toggleNav} className={`${style.hamburger} ${navActive ? "fab fa-mixer" : "fas fa-bars"}`}></span> : null}
      </div>

      {navActive ? <Navbar toggleNav={mediaMatches ? toggleNav : null} /> : null}
    </header>
  );
};

export default Header;
