import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Navbar from "../Navbar/index";
import { DataContext } from "../../DataContext";

const Header = () => {
  const [navActive, setNavActive] = useState(true);
  const { mediaMatches } = useContext(DataContext);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    setNavActive(!mediaMatches);
  }, [mediaMatches]);

  return (
    <header className={style.header}>
      <div>
        <Link to="/" className={style.brandLink}>
          <h1 className={style.brand}>
            <span>The</span> Siren
          </h1>
        </Link>
        {mediaMatches ? <span onClick={toggleNav} className={`${style.hamburger} ${navActive ? "fab fa-mixer" : "fas fa-bars"}`}></span> : null}
      </div>

      {navActive ? <Navbar toggleNav={mediaMatches ? toggleNav : null} /> : null}
    </header>
  );
};

export default Header;
